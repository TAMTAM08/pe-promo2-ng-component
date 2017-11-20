/*globals angular */

angular
    .module('app')
    .component('taskAddPanel', {
        templateUrl: './taskAddPanel/app.taskAddPanel.html',
        controller : [
            '$scope',
            'produits',
            function ($scope, produits) {
                $scope.ajouter = function () {
                    produits.add($scope.task);
                    $scope.task = null;
                };
            }]
    });
