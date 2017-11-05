module.exports = function(app) {
    app.controller('DeviceController', DeviceController);
    app.directive('device', device);
}

function device() {
    return {
        template: require('./device.view.html'),
        controller: DeviceController
    }
}

function DeviceController($scope, $state, $rootScope) {
    $scope.page = $state.current.name;
    $scope.environment = process.env.NODE_ENV;
    $scope.profile = $rootScope.profile;
}

function getDevice($scope, remote, $http) 
{
    $http.get('/api/devices/:id').then(function (data) {
        $scope.device = data.device;
    });
}

function getAllDevices($scope, remote, $http) 
{
    $http.get('/api/devices').then(function (data) {
        $scope.device = data.device;
    });

    angular.forEach($scope.device, function(value, key){
        console.log(value, key);
     });
}

function postDevice($scope, remote, $http) 
{
    $http.post('/api/devices', data).success(function (data, status, headers) {
        $scope.devices = data;
    })
    .error(function (data, status, headers) {
        $scope.ResponseDetails = "Data: " + data + "Status: " + status + "Headers: " + headers;
    });
}
