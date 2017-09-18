

(function()
{
    'use strict';
    angular.module('myApp',[])
           .controller('myC',myC);
    myC.$inject = ['$scope'];
    function myC($scope) {
            $scope.ip = "";
            $scope.trigger = function()
            {
              return $scope.answer = ($scope.ip).split('').reverse().join('');
            };
    }
})();