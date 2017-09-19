(function()
{
    'use strict';
    angular.module('myApp',[])
           .controller('myC',myC);
    myC.$inject = ['$scope'];
    function myC($scope)
    {
             $scope.target = "";
             $scope.answer = "";
             $scope.factor = function()
             {
                 var a = 1;
                 for(var i=1; i<=$scope.target;i++)
                 {
                     a *= i;
                 }
                 $scope.answer = a;
             };
    }
})();
