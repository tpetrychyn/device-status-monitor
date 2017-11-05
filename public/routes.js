module.exports = function (app) {
    app.config(routes);
}

function routes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    // Universal routes
    $stateProvider
        .state('home', {
            template: require('./components/device/device.view.html'),
            controller: 'DeviceController',
            url: '/home'
        })
        .state('profile', {
            template: require('./pages/profile/profile.view.html'),
            controller: 'ProfileController',
            url: '/profile'
        })
        .state('device', {
            template: require('./components/device/device.view.html'),
            controller: 'DeviceController',
            url: '/device'
        })
        .state('device-create', {
            template: require('./components/device/device-create/device-create.view.html'),
            controller: 'DeviceCreateController',
            url: '/device-create'
        })
        .state('device-view/:id', {
            template: require('./components/device/device-view/device-view.view.html'),
            controller: 'DeviceViewController',
            url: '/device/:id'
        })            
        ;

    // Web routes
    if (process.env.NODE_ENV != 'electron') {
    }
    //electron routes
    if (process.env.NODE_ENV == 'electron') {
    }
};