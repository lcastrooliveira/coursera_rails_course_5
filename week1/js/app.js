(function(){
    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.foods = '';
        $scope.message = '';

        $scope.checkFood = function() {
            food_array = $scope.foods.split(',');
            food_array = food_array.filter(function(n){ return n.trim() != '' });
            if(food_array.length == 0) {
                $scope.message = 'Please enter data first';
            } else if (food_array.length <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';    
            }
        }
    }
})();