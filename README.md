# README #

# Workshop Client
Workshop client application repo based on Angular 2

For the build process we are using Gulp and Webpack.


## What you need to run this app:

* node and npm (Use NVM)
* Ensure you're running Node (v4.x.x+) and NPM (3.x.x+)

## Setup

```bash

(sudo) npm install -g gulp webpack webpack-dev-server webpack-dashboard

git clone

cd workshop-client

npm install

npm run serve

```

### Gulp Tasks
Here's a list of available tasks:

* `build` - runs Webpack, which will transpile, concatenate, compress/minify and prepare for cache all assets and modules and puts them into `www` folder.
  It also prepares `index.jade` to be used as application entry point, links assets and created production version.
* `clean` - clean www folder before deploy.
* `default` - `build`.

### NPM tasks
* `serve` - serving src folder files and watching changes using `webpack-dev-server` + `webpack-dashboard`, 
* `build` - clear 'www' folder from previous files and run 'gulp build'

## Build System
We are using Gulp and Webpack together for its build system.

`Webpack` handles all file-related concerns:

* Transpiling from ES6 to ES5 with `Babel`
* Loading Jade files as modules
* Transpiling stylesheets(stylus and sass) and appending them to the DOM
* Refreshing the browser and rebuilding on file changes
* Hot module replacement for transpiled stylesheets
* Bundling the app
* Loading all modules
* Compressing all assets

`Gulp` is the orchestrator:

* Starting and calling Webpack
* Starting building all modules
* Deployment via rsync


## Style Guide & File Structure

This project file structure, naming conventions and coding styles are
in most based on official Angular 2 Style Guide, before you start working 
on this project it's strongly recommended read this guide:

[Angular 2 Official Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)

## Common modules (components)

In final release Angular team recommends use modules (@NgModule)

We have few modules, the main 2 are: 

* `CoreModule` - which is placed at `src/app/core` where we put only app wide components/services, 
    for example 'AuthService' or 'HeaderComponent'
* `SharedModule` - all common modules are placed here (`src/app/shared`) as it recommends Angular 2 style guide,
    other modules in app are use this modules to extend their own functionality 

WARNING: `CoreModule` is instantiated only once at `AppModule`, 
        whereas `SharedModule` could be instantiated multiple times in other modules


## File Structure
We use the modules + component approach. This is the new standard for developing Angular apps 
and a great way to ensure maintainable code by encapsulation of our behavior logic. 
A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. 
