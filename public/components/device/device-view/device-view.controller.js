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

function DeviceViewController($scope, $state, $http, $rootScope, $stateParams, $filter) {

    $scope.promise = {
        restart: {}
    }

    $scope.device = {};
    $scope.page = $state.current.name;
    $scope.environment = process.env.NODE_ENV;
    $scope.profile = $rootScope.profile;
    $scope.displayForm = false;

    $http.get('/api/devices/').then(function (data) {
        var devices = data.data.data;
        var device = $filter('filter')(devices, { deviceId: $stateParams.id})
        $scope.device = device[0];
        console.log($scope.device);
    });

    $scope.restartDevice = function() {
        $scope.device.status = 'down';
        var self = this;
        setTimeout(function() {
            $scope.device.status = 'up';
            $scope.$apply();
        }, 1500);
        $scope.promise.restart = $http.get('/api/devices/'+$scope.device.deviceId+'/restart').then(function (data) {
            console.log('eh')
        });
    }

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

