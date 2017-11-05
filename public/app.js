require('angular');
require('angular-ui-router');
require('angular-electron');

var plugins = [
    'ui.router'
];
if (process.env.NODE_ENV == 'electron')
    plugins.push('angular-electron')

var module = angular.module('rec-starter', plugins);

//Alphabetize these

require('./components/navbar/navbar.controller.js')(module);
require('./components/device/device.controller.js')(module);
require('./components/device/device.controller.js')(module);
require('./components/device/device-view/device-view.controller.js')(module);
require('./components/device/device-create/device-create.controller.js')(module);

require('./pages/home/home.controller.js')(module);
require('./pages/profile/profile.controller.js')(module);

require('./routes.js')(module);
