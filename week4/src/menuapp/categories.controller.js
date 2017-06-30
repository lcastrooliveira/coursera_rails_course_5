(function() {
  'use strict';
  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories) {
    var cat = this;
    cat.categories = categories;
    console.log(cat.categories);
  }
})();
