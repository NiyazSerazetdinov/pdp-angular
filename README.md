[![Build Status](https://travis-ci.org/NiyazSerazetdinov/pdp-angular.svg?branch=master)](https://travis-ci.org/NiyazSerazetdinov/pdp-angular)

http://pdp-angular.herokuapp.com/#/articles

## Getting Started

```
git clone git@github.com:NiyazSerazetdinov/pdp-angular.git
cd pdp-angular
```

If you just want to start a new project without commit history then you can do:

```bash
git clone --depth=1 git@github.com:NiyazSerazetdinov/pdp-angular.git <your-project-name>
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/#/articles`.
