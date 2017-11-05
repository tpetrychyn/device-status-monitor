module.exports = function(app) {
    app.controller('DeviceViewController', DeviceViewController);
    app.directive('deviceView', deviceView);
}

function deviceView() {
    return {
        template: require('./device-view.view.html'),
        controller: DeviceViewController
    }
}

function DeviceViewController($scope, $state, $rootScope) {
    $scope.page = $state.current.name;
    $scope.environment = process.env.NODE_ENV;
    $scope.profile = $rootScope.profile;
}