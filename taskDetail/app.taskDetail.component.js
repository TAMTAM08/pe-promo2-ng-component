angular
    .module("app")
    .component('taskDetail', {
        templateUrl: './taskDetail/app.taskDetail.html',
        bindings: {
            task: '='
        },
        controller: ['$scope', 'produits', function ($scope, produits) {
            $scope.edit = function (item) {
                item.hidden = !item.hidden;
            };

            $scope.markAsDone = produits.markAsDone;

            $scope.delete = function (taskItem) {
                produits.delete(taskItem);
            };
        }]
    });