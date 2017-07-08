(function() {
  'use strict';
  angular.module('common')
  .service('SignUpService', SignUpService);

  function SignUpService() {
    var service = this;
    service.userData = {};
    service.saveUserData = function(data) {
      service.userData.firstName = data.firstName;
      service.userData.lastName = data.lastName;
      service.userData.emailName = data.email;
      service.userData.phoneName = data.phone;
      service.userData.menuName = data.menu;
      service.userData.menuData = data.menuData;
    };

    service.getUserData = function() {
      return service.userData;
    };
  }
})();
