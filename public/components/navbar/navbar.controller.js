module.exports = function(app) {
    app.controller('NavBarController', NavBarController);
    app.directive('navBar', navBar);
}

function navBar() {
    return {
        template: require('./navbar.view.html'),
        controller: NavBarController
    }
}

function NavBarController($scope) {
}