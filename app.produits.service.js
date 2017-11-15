/*eslint-disable */

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

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Produits = function () {
    function Produits() {
        _classCallCheck(this, Produits);

        this.list = [{ label: 'oeufs', done: false }, { label: 'lait', done: false }, { label: 'farine', done: false }];
    }

    _createClass(Produits, [{
        key: 'getAll',
        value: function getAll() {
            return this.list;
        }
    }, {
        key: 'add',
        value: function add(taskLabel) {
            this.list.push({
                label: taskLabel,
                done: false
            });
        }
    }, {
        key: 'markAsDone',
        value: function markAsDone(taskItem) {
            taskItem.done = !taskItem.done;
        }
    }, {
        key: 'selectAll',
        value: function selectAll() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var taskItem = _step.value;

                    taskItem.done = true;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'delete',
        value: function _delete(taskItem) {
            var position = this.list.indexOf(taskItem);
            this.list.splice(position, 1);
        }
    }, {
        key: 'countItemRestants',
        value: function countItemRestants() {
            var compteur = 0;

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var taskItem = _step2.value;

                    if (!taskItem.done) {
                        compteur++;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return compteur;
        }
    }]);

    return Produits;
}();

angular
    .module('app')
    .service('produits', Produits);
