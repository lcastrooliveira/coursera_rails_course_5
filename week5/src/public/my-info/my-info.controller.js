(function () {
  'use strict';
  angular.module('public')
  .controller('MyInfoController',MyInfoController);

  MyInfoController.$inject = ['userInfo'];
  function MyInfoController(userInfo) {
    var infoCtrl = this;
    infoCtrl.userInfo = userInfo;
    console.log('userInfo', userInfo);
    if(angular.equals(infoCtrl.userInfo, {}))
      infoCtrl.unregistered = true;
    else
      infoCtrl.unregistered = false;
  }
})();
