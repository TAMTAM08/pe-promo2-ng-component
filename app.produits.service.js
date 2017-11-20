/*eslint-disable */

/**
 * Code commenté pour montrer grunt-uglify
 * Je l'ai remplacé par la version transpilé en ES 5 à partir de ligne 55 de ce fichier
 */
// class Produits {
//     constructor() {
//         this.list = [
//             { label: 'oeufs', done: false },
//             { label: 'lait', done: false },
//             { label: 'farine', done: false }
//         ];
//     }
//
//     getAll() {
//         return this.list;
//     }
//
//     add(taskLabel) {
//         this.list.push({
//             label: taskLabel,
//             done: false
//         });
//     }
//
//     markAsDone(taskItem) {
//         taskItem.done = !taskItem.done;
//     }
//
//     selectAll () {
//         for (let taskItem of this.list) {
//             taskItem.done = true;
//         }
//     }
//
//     delete (taskItem) {
//         let position = this.list.indexOf(taskItem);
//         this.list.splice(position, 1);
//     }
//
//     countItemRestants () {
//         let compteur = 0;
//
//         for (let taskItem of this.list) {
//             if(!taskItem.done) {
//                 compteur++;
//             }
//         }
//
//         return compteur;
//     }
// }

var Produits = (function () {
    function Produits() {
        this.list = [
            { label: 'oeufs', done: false },
            { label: 'lait', done: false },
            { label: 'farine', done: false }
        ];
    }
    Produits.prototype.getAll = function () {
        return this.list;
    };
    Produits.prototype.add = function (taskLabel) {
        this.list.push({
            label: taskLabel,
            done: false
        });
    };
    Produits.prototype.markAsDone = function (taskItem) {
        taskItem.done = !taskItem.done;
    };
    Produits.prototype.selectAll = function () {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var taskItem = _a[_i];
            taskItem.done = true;
        }
    };
    Produits.prototype.delete = function (taskItem) {
        var position = this.list.indexOf(taskItem);
        this.list.splice(position, 1);
    };
    Produits.prototype.countItemRestants = function () {
        var compteur = 0;
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var taskItem = _a[_i];
            if (!taskItem.done) {
                compteur++;
            }
        }
        return compteur;
    };
    return Produits;
}());
/**
 * Injection de dépendance vide ici
 * Pour ajouter une dépendance à ce service, il suffit de l'ajouter à ce tableau et dans le constructeur du service
 */
Produits.$inject = [];

angular
    .module('app')
    .service('produits', Produits);
