/*globals angular */

angular
    .module("app")
    .component('taskListPanel', {
        templateUrl: './taskListPanel/app.taskListPanel.html',
        controller : [
            '$scope',
            'produits',
            function ($scope, produits) {
                $scope.tasksList = produits.getAll();
                $scope.countItemRestants = function () {
                    return produits.countItemRestants();
                };
            }]
    });
