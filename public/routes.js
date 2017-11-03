module.exports = function (app) {
    app.config(routes);
}

function routes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    // Web routes
    if (process.env.NODE_ENV != 'electron') {
    $stateProvider
        .state('home', {
            template: require('./pages/home.view.html'),
            controller: 'HomeController',
            url: '/home'
        })
    }
    //electron routes
    if (process.env.NODE_ENV == 'electron') {
        $stateProvider
            .state('home', {
                template: require('./pages/home.view.html'),
                controller: 'HomeElectronController',
                url: '/home'
            })
    }
};