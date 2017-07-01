(function() {
  'use strict';
  angular.module('MenuApp')
  .controller('CategoryDetailController', CategoryDetailController);

  CategoryDetailController.$inject = ['$stateParams', 'items'];

  function CategoryDetailController($stateParams, items) {
      var vm = this;
      vm.items = items;
  }
})();
