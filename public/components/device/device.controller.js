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

function DeviceController($scope, $state, $rootScope, $http) {
    $scope.page = $state.current.name;
    $scope.environment = process.env.NODE_ENV;
    $scope.profile = $rootScope.profile;
    $scope.displayInfo = false;

    $scope.getDevice = function() {
        $http.get('/api/devices/:id').then(function (data) {
            $scope.device = data.device;            
        });
    }
    $scope.getDevices = function() {
        $http.get('/api/devices').then(function (data) {
            $scope.devices = data.data.data;
            console.log("Getting data");
            console.log(data.data.data);
        });
    
        angular.forEach($scope.device, function(value, key){
            console.log(value, key);
         });
    }
    $scope.postDevice = function() {
        $http.post('/api/devices', data).success(function (data, status, headers) {
            $scope.devices = data;
        })
        .error(function (data, status, headers) {
            $scope.ResponseDetails = "Data: " + data + "Status: " + status + "Headers: " + headers;
        });
    }

    $scope.getDevices();
}


