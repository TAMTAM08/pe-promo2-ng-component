/*globals angular */

angular
    .module('app')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state({
            name: 'home',
            url: '/',
            component: 'homePanel'
        });
        $stateProvider.state({
            name: 'add',
            url: '/add',
            component: 'taskAddPanel'
        });
        $stateProvider.state({
            name: 'list',
            url: '/list',
            component: 'taskListPanel'
        });
    }]);
