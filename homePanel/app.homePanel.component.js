/*globals angular */

angular
    .module('app')
    .component('homePanel', {
        /**
         * Ici le template HTML est directement mis en place dans le composant en JS
         * On peut se le permettre ici parce que le template est très petit
         *
         * C'est unemauvaise pratique. On devrait idéalement utiliser templateUrl comme dans les autres components
         */
        template: '<h1>hello</h1>'
    });
