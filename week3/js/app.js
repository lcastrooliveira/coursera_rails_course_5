(function() {
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItems);

  function FoundItems() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'items.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      bindToController: true,
      controllerAs: 'dirCtrl'
    };
    return ddo;
  }

  function FoundItemsDirectiveController() {
    var dirCtrl = this;
    console.log(dirCtrl.foundItems);
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var vm = this;
    vm.found = [];
    vm.nothingFound = false;
    vm.searchTerm = "";
    vm.onRemove = function(index) {
      vm.found.splice(index, 1);
    };
    vm.findMatchedItems = function() {
      vm.nothingFound = false;
      MenuSearchService.getMatchedMenuItems(vm.searchTerm).then(function(result){
        vm.found = result;
        if(vm.found.length === 0)
          vm.nothingFound = true;
      },function(error) {
        console.error(error);
      });
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var vm = this;

    vm.getMatchedMenuItems = function(searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
      }).then(function (result) {
        var foundItems = [];
        // process result and only keep items that match
        menu_items = result.data.menu_items;
        for(i = 0; i < menu_items.length; i++) {
          if(searchTerm === '') break;
          if(menu_items[i].name.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(menu_items[i]);
          }
        }
        // return processed items
        return foundItems;
      });
    };
  }
})();
