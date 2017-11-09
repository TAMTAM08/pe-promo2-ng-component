function tasksCtrl($scope, produits) {
    $scope.tasksList = produits.getAll();

    $scope.ajouter = function() {
        produits.add($scope.task);
        $scope.task = null;
    };

    $scope.selectAll = function () {
        produits.selectAll();
    };

    $scope.countItemRestants = function () {
        return produits.countItemRestants();
    };

    $scope.delete = function (taskItem) {
        produits.delete(taskItem);
    };
}

class Produits {
    constructor() {
        this.list = [
            { label: "oeufs", done: false },
            { label: "lait", done: false },
            { label: "farine", done: false }
        ];
    }

    getAll() {
        return this.list;
    }

    add(taskLabel) {
        this.list.push({
            label: taskLabel,
            done: false
        });
    }

    markAsDone(taskItem) {
        taskItem.done = !taskItem.done;
    }

    selectAll () {
        for (let taskItem of this.list) {
            taskItem.done = true;
        }
    }

    delete (taskItem) {
        let position = this.list.indexOf(taskItem);
        this.list.splice(position, 1);
    }

    countItemRestants () {
        let compteur = 0;

        for (let taskItem of this.list) {
            if(!taskItem.done) {
                compteur++;
            }
        }

        return compteur;
    }
}

angular
    .module("app", [])
    .controller("tasksController", ["$scope", "produits", tasksCtrl])
    .service("produits", Produits);
