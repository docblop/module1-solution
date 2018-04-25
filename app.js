
(function () {
    'use strict';


    angular.module('MyApp', [])
        .controller('DIController', DIController);

    DIController.$inject = ['$scope', '$filter'];
    function DIController($scope, $filter) {

        $scope.counter = 0;

        $scope.Check = function () {
            var checks = $scope.splitsies.split(",");
            $scope.counter = 0;
            checks.forEach(function (check) {
                if (check.trim().length > 0) {
                    $scope.counter++;
                }
            });

            if ($scope.counter >= 4) {
                $scope.message = "Too much!";
            } else if ($scope.counter==0) {
                $scope.message = "Please enter something!";
            } else {
                $scope.message = "Enjoy!";
            }


        }


    }


})();

