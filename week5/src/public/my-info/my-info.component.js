(function () {
"use strict";

angular.module('public')
  .component('userDetails', {
    templateUrl: 'src/public/my-info/user-details.html',
    bindings: {
      userData: '<'
    },
    controller: UserDetailsController
  });

  UserDetailsController.$inject = ['ApiPath'];
  function UserDetailsController(ApiPath) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
  }
})();
