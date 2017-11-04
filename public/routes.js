module.exports = function (app) {
    app.config(routes);
}

function routes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    // Universal routes
    $stateProvider
        .state('home', {
            template: require('./pages/home/home.view.html'),
            controller: 'HomeController',
            url: '/home'
        })
        .state('profile', {
            template: require('./pages/profile/profile.view.html'),
            controller: 'ProfileController',
            url: '/profile'
        });

    // Web routes
    if (process.env.NODE_ENV != 'electron') {
    }
    //electron routes
    if (process.env.NODE_ENV == 'electron') {
    }
};