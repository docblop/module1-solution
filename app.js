
(function () {
    'use strict';


    angular.module('MyApp', [])
        .controller('DIController', DIController);

    DIController.$inject = ['$scope', '$filter'];
    function DIController($scope, $filter) {

        $scope.splitsies = "";
        $scope.counter = 0;
        $scope.messageClass = "";

        $scope.Check = function () {
            $scope.counter = 0;
            if ($scope.splitsies != "") {
                var checks = $scope.splitsies.split(",");
                checks.forEach(function (check) {
                    if (check.trim().length > 0) {
                        $scope.counter++;
                    }
                });
            }

            if ($scope.splitsies == '') {
                $scope.message = "Please enter data first!";
                $scope.messageClass = "bg-danger text-danger";
            } else if ($scope.counter >= 4) {
                $scope.message = "Too much!";
                $scope.messageClass = "bg-warning text-warning";
            } else if ($scope.counter==0) {
                $scope.message = "Please enter data first!";
                $scope.messageClass = "bg-danger text-danger";
            } else {
                $scope.message = "Enjoy!";
                $scope.messageClass = "bg-success text-success";
            }


        }


    }


})();

