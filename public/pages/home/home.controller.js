var fs;
require('./style.css');
require('../.././components/device/device.controller');

if (process.env.NODE_ENV == 'electron')
    fs = window.require('fs');


module.exports = function(app) {
    app.controller('HomeController', HomeController);

    if (process.env.NODE_ENV == 'electron')
        app.controller('HomeElectronController', HomeElectronController);
}

function HomeController($scope, $rootScope, $http) {
    $http.get('/api/users/me').then(function(data) {
        $rootScope.profile = data.data;
        $scope.profile = $rootScope.profile;
    });
}

function HomeElectronController($scope, $rootScope, remote, $http)
{
    $http.get('/api/users/me').then(function (data) {
        $rootScope.profile = data.data;
        $scope.profile = $rootScope.profile;
    });

    // $scope.openDialog = function() {
    //     remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
    //         title: 'Select a meme',
    //         properties: [
    //             'openFile',
    //             'openDirectory'
    //         ]
    //     }, function(files) {
    //         if (files && files.length) {
    //             $scope.addr = files[0];
    //             console.log($scope.addr);
    //             var test = fs.readFileSync('/Users/work/Documents/service-card-service/service-card-webapp/webpack.deploy.js', 'utf8'); //throws error if file doesn't exist
    //             console.log(test);
    //             $scope.$apply();
    //         }
    //     });
    // };
}
