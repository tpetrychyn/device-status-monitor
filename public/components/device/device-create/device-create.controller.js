module.exports = function (app) {
    app.controller('DeviceCreateController', DeviceCreateController);
    app.directive('device-create', deviceCreate);
}

function deviceCreate() {
    return {
        template: require('./device-create.view.html'),
        controller: DeviceCreateController
    }
}

function DeviceCreateController($scope, $state, $rootScope, $http) {
    $scope.device = {};
    $scope.page = $state.current.name;
    $scope.environment = process.env.NODE_ENV;
    $scope.profile = $rootScope.profile;

    $scope.addDevice = function () {
        console.log($scope.device.name);
        $http.post('/api/devices', data).success(function (data, status, headers) {
            $scope.device = data;
        })
            .error(function (data, status, headers) {
                $scope.ResponseDetails = "Data: " + data + "Status: " + status + "Headers: " + headers;
            });
    };
}
