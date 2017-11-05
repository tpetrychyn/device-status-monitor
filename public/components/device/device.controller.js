module.exports = function(app) {
    app.controller('deviceController', deviceController);
    app.directive('device', device);
}

function device() {
    return {
        template: require('./device.view.html'),
        controller: deviceController
    }
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
