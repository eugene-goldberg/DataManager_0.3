'use strict';

// Datacollectors controller
angular.module('datacollectors').controller('AdminController', ['$scope', '$http', '$stateParams', '$location', 'Authentication', 'Datacollectors',
    function($scope, $http, $stateParams, $location, Authentication, Datacollectors) {
        $scope.authentication = Authentication;

        $scope.users;

        $scope.roles;

        function getUsers(){
            $http({
                method: 'GET',
                url: '/users'
            }).success(function(data){
                $scope.users = data;
            }).error(function(){
                alert('error');
            });
        }

        function getRoles(){
            $http({
                method: 'GET',
                url: '/roles'
            }).success(function(data){
                $scope.roles = data;
            }).error(function(){
                alert('error');
            });
        }

        $scope.generatePlaycardsFromDcInventory = function(){
            $http.post('/generate_playcards', {})
                .success(function(data, status, headers, config) {

                }).
                error(function(data, status, headers, config) {
                    alert('Error while generating Playcards');
                });
        };

        getUsers();
        getRoles();

        $scope.usersGridOptions = {
            bindingOptions: {
                dataSource: 'users',
                columns: 'collectionDatafields'
            },
            grouping: {
                autoExpandAll: true
            },
            groupPanel: {
                visible: true
            },
            filterRow: {
                visible: true,
                applyFilter: 'auto'
            },
            searchPanel: {
                visible: true,
                width: 240,
                placeholder: 'Search...'
            },
            paging: {
                enabled: true,
                pageSize: 10
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [5, 10, 20]
            },
            rowAlternationEnabled: true,
            allowColumnReordering: true,
            allowColumnResizing: true,
            columnAutoWidth: true,
            columnChooser:  {
                enabled: true

            },
            selection: {
                mode: 'multiple'
            }
        };

        $scope.rolesGridOptions = {
            bindingOptions: {
                dataSource: 'roles',
                columns: 'collectionDatafields'
            },
            grouping: {
                autoExpandAll: true
            },
            groupPanel: {
                visible: true
            },
            filterRow: {
                visible: true,
                applyFilter: 'auto'
            },
            searchPanel: {
                visible: true,
                width: 240,
                placeholder: 'Search...'
            },
            paging: {
                enabled: true,
                pageSize: 10
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [5, 10, 20]
            },
            rowAlternationEnabled: true,
            allowColumnReordering: true,
            allowColumnResizing: true,
            columnAutoWidth: true,
            columnChooser:  {
                enabled: true

            },
            selection: {
                mode: 'multiple'
            }
        };
    }
]);

