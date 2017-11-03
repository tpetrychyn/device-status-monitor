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

Running electron

```
npm run dev:electron
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

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License