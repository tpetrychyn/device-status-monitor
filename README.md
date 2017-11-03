# REC Frontend Starter

Frontend boilerplate using AngularJS, Webpack and Electron. Support for ES6 through Babel.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Installing Depedencies

```
npm install
```

Running for the web

```
npm run dev
```

Running for electron

```
npm run dev:electron
```

## File Structure & Explanation

Building the web bundle with Webpack for deployment

```
main.js ~ Holds setup code for Electron
webpack.config.js ~ Webpack configuration
/public
--index.html ~ Skeleton for page, loads and initializes Angular
--app.js ~ Sets up Angular, loads all the controllers, services, component JS files
--routes.js ~ Defines the paths for the pages
--/assets ~ For image and css files
--/components ~ For directives, pieces to go in a page, like navbar
--/pages
----home.view.html ~ template for the homepage
----home.controller.js ~ controller for the homepage
```

To add components/pages
```
1. Create a subfolder with a descriptive name
2. Create a [name].view.html file, and a [name].controller.js file
3. Add your controller.js file to app.js
4. Add references to your view and controller to routes.js
```

## Deployment

Building the web bundle with Webpack for deployment

```
npm run build
```

Should then be able to host this bundle as a static webpage, on Github pages for example.

Building the electron bundle with Webpack for deployment

```
npm run build:electron
*Then: change loadURL to the static path to the built app to run without webpack-dev-server
npm run electron
```

## Built With

* [AngularJS](https://angularjs.org) - Frontend web UI framework
* [Electron](https://electron.atom.io/) - For running as a standalone native app
* [Webpack](https://webpack.js.org/) - For building the app and dev server

## Authors

* **Taylor Petrychyn** - *Creator* - [tpetrychyn](https://github.com/tpetrychyn)

* **Paul Hewitt** - *Contributor* - [paulhewitt](https://github.com/paulhewitt)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License
