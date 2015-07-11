'use strict';

angular.module('datacollectors').controller('AccessRequestController', ['$scope', '$http', '$stateParams', '$location', 'Authentication', 'Datacollectors',
    function($scope, $http, $stateParams, $location, Authentication, Datacollectors) {
        $scope.authentication = Authentication;

        $scope.currentUser = Authentication.user;

        $scope.appAreas = [
            {
                name: 'Data Upload'
            },
            {
                name: 'Data Explorer'
            },
            {
                name: 'SalesForce DC Demand'
            },
            {
                name: 'Internal DC Demand'
            },
            {
                name: 'Play Cards'
            },
            {
                name: 'Dashboards'
            }
        ];

        $scope.submitAccessRequest = function(){
            alert('submitting access request for: ' + $scope.currentUser.email);
        }

    }
]);


