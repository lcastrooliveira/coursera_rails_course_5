(function() {
  'use strict';
  angular.module('public')
  .controller('SignUpController',SignUpController);

  SignUpController.$inject = ['MenuService', 'SignUpService'];
  function SignUpController(MenuService, SignUpService) {
    var vm = this;

    vm.error = false;
    vm.saved = false;

    vm.submit = function() {
      console.log(vm.menu);
      MenuService.getMenuItem(vm.menu).then(function(data) {
        vm.error = false;
        vm.saveUserData(data);
        vm.saved = true;
      },function(error) {
        vm.error = true;
      });
    };

    vm.saveUserData = function(data) {
      var userData = {
        firstName: vm.firstName,
        lastName: vm.lastName,
        email: vm.email,
        phone: vm.phone,
        menu: vm.menu,
        menuData: data
      };
      SignUpService.saveUserData(userData);
    };
  }
})();
