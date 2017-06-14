(function() {
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];

  function ToBuyController($scope, ShoppingListCheckOffService) {
    var buyCtrl = this;
    buyCtrl.getToBuyList = function() {
      return ShoppingListCheckOffService.toBuy;
    };

    buyCtrl.buyItem = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  }

  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.getBoughtList = function() {
      return ShoppingListCheckOffService.bought;
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;
    service.toBuy = [
      { name: "cookies", quantity: 10 },
      { name: "Doge's cookies", quantity: 5 },
      { name: "Health Potion", quantity: 6 },
      { name: "Plama Rifle", quantity: 1 },
      { name: "Life insurance", quantity: 2 }
    ];
    service.bought = [];

    service.buyItem = function(index) {
      result = service.toBuy.splice(index,1);
      service.bought.push(result.shift());
    };
  }
})();
