'use strict';

module.exports = function(app) {
    app.controller('ProfileController', ProfileController);
}

function ProfileController($scope, $rootScope) {
    $scope.profile = $rootScope.profile;
}