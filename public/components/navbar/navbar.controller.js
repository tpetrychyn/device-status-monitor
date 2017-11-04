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

function NavBarController($scope, $state, $rootScope) {
    $scope.page = $state.current.name;
    $scope.environment = process.env.NODE_ENV;
    $scope.profile = $rootScope.profile;
}