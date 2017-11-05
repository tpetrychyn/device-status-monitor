module.exports = function (app) {
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
    $scope.device = {};
    $scope.page = $state.current.name;
    $scope.environment = process.env.NODE_ENV;
    $scope.profile = $rootScope.profile;
    $scope.displayForm = false;

    $scope.editDevice = function () {
        $scope.displayForm = true;
    }

    $scope.saveDevice = function () {
        $scope.displayForm = false;
        var name = $scope.device.name;
        var locationType = $scope.device.locationType;
        var longitude = $scope.device.longitude;
        var latitude = $scope.device.latitude;
    }
}

