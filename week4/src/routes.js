(function() {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/main-categories.template.html',
      controller: 'CategoriesController as cat',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/items/{categoryName}',
      templateUrl: 'src/menuapp/templates/main-category-detail.template.html',
      controller: "CategoryDetailController as categoryDetail",
      resolve: {
        items: ['$stateParams','MenuDataService',
               function ($stateParams,MenuDataService) {
                 return MenuDataService.getItemsForCategory($stateParams.categoryName);
               }]
      }
    });
  }
})();
