require('angular');
require('angular-ui-router');
require('angular-electron');

var plugins = [
    'ui.router'
];
if (process.env.NODE_ENV == 'electron')
    plugins.push('angular-electron')

var module = angular.module('rec-starter', plugins);

require('./components/navbar/navbar.controller.js')(module);

require('./pages/home.controller.js')(module);

require('./routes.js')(module);