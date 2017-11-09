angular
    .module("app")
    .component('taskDetail', {
        templateUrl: './taskItem.html',
        bindings: {
            task: '='
        },
        controller: ['$scope', 'produits', function ($scope, produits) {
            $scope.edit = function (item) {
                item.hidden = !item.hidden;
            };

            $scope.markAsDone = produits.markAsDone;
        }]
    });