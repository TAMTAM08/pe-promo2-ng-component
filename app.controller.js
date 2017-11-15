/*globals angular */

function tasksCtrl($scope, produits) {
    $scope.tasksList = produits.getAll();

    $scope.ajouter = function () {
        produits.add($scope.task);
        $scope.task = null;
    };

    $scope.selectAll = function () {
        produits.selectAll();
    };

    $scope.countItemRestants = function () {
        return produits.countItemRestants();
    };
}

angular
    .module('app')
    .controller('tasksController', [
        '$scope',
        'produits',
        tasksCtrl]);
