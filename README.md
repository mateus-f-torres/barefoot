[![Netlify Status](https://api.netlify.com/api/v1/badges/ba3f22ea-0790-413a-be14-7ccf8972d61f/deploy-status)](https://app.netlify.com/sites/barefoot/deploys)
[![Build Status](https://travis-ci.com/mateus-f-torres/barefoot.svg?branch=master)](https://travis-ci.com/mateus-f-torres/barefoot)
[![codecov](https://codecov.io/gh/mateus-f-torres/barefoot/branch/master/graph/badge.svg)](https://codecov.io/gh/mateus-f-torres/barefoot)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/mateus-f-torres/barefoot/blob/master/LICENSE)

# Barefoot
A React Redux PWA kitchen sink style template.  
Complete with configurations and tools for a more agile development.  
Create from scratch and in constant improvement as my knowledge grows.

## Getting Started
### Installation
Start by forking this repo.  
To do that you just need to click the **Fork** button at the top of the page.  

After creating a "fork" of the project you can then access **Settings** and change the project name.  
You can also continue with the same name if you wish to open PRs to me.

Now you can clone your fork to your development machine.  
Click on the **Clone or download** button in your project's page, copy the link and clone.  
```
git clone https://github.com/[your-user-name]/[your-project].git
```

Remember to keep the original **LICENSE** and credit me and this project in your own **README**.  

### Usage
First a quick overview of the present _npm scripts_.
* [`start`](#start)
* [`start:mock`](#startmock)
* [`start:storybook`](#startstorybook)
* [`build`](#build)
* [`serve`](#serve)
* [`format`](#format)
* [`lint`](#lint)
* [`test`](#test)
* [`test:watch`](#testwatch)
* [`test:cypress`](#testcypress)
* [`test:cypress-run`](#testcypress-run)

#### `start`
Start the application in _development_ mode with `webpack-dev-server`.  
We are using `localhost:8080` as the default location.  

#### `start:mock`
Start a [`json-server`](https://github.com/typicode/json-server) to mocking API calls when developing in a offline environment.  
The mock server will be served at `localhost:3000`.  

#### `start:storybook`
Start `storybook` to develop your UI components isolated from the main application.  
This command will automatically open a new browser tab.  

#### `build`
Bundle the whole application in _production_ mode.  
What gets bundled depends on the dependency tree created from `src/index.js`.  

#### `serve`
Serve the `dist/` directory locally with [`http-server`](https://github.com/http-party/http-server).  
Good for testing your production build locally if you want.    

#### `format`
Runs `prettier` on every `.js` file from `src`, `cypress`, `__tests__` and `__mocks__` directory.  
Formatting the code according to `prettier.config.js`.  

#### `lint`
Runs `eslint` on every `.js` file from `src`, `cypress`, `__tests__` and `__mocks__` directory.  
Linting and fixing (when possible) according to `.eslintrc.js` and `.eslintignore`.  

#### `test`
Start `jest` and test all `.spec.js` or `.test.js` files from `src` and `__tests__`.  
Providing test coverage information about the project.  

#### `test:watch`
Start `jest` in watch mode to help you write and debug your tests.  
Better than running `test` after each change to a test file.  

#### `test:cypress`
Start `cypress`, open _Cypress Test Runner_ and test your application in a real browser environment.  
You will need to run `start` as well to serve the application.

#### `test:cypress-run`
Start `cypress` and run all specs in headless mode (good for CI)  
Also need to run alongside `start` (we use `wait-on` for this)

### Development
Most of the time you will just need the `start` script to develop your app.  
Any changes made to files inside `src` will automatically trigger a hot-reload of the app.  
```
yarn start
```

If the need to locally mock API calls arises use `start:mock` alongside `start`.  
But remember to change `urls.js` to `urls.mock.js` on files that import from it.  
```
yarn start:mock
```

Use the `start:storybook` script if you prefer an isolated developing environment for your components.  
Storybook also reloads any `.stories` when associated files are modified.
```
yarn start:storybook
```

When the time to bundle your app arrives you just need to call the `build` script.  
A `bundle_report.html` file will be generated for you in the `reports` directory.  
```
yarn build
```

You may notice that there are no `pre` or `post` scripts in here.  
That's because most of the automatic formatting, linting and testing is handled by _git hooks_.  
Instead of wasting time on unfinished code I prefer to only watch code that is being committed.  

## Coding Time
Since this is a boilerplate and not a generator (yet) we need to cleanup some code.  
What you change and what you keep will depend on your wants and needs.  

### Architecture
Time to talk about some choices in directory organization and file naming.  

### Tech Stack
A small summary about the main libraries in this project.  

* [React](#react)
* [Redux](#redux)
* [Storybook](#storybook)
* [Jest and Cypress](#jest-and-cypress)
* [Internationalization](#internationalization)
* [Webpack](#webpack)

#### React

#### Redux

#### Storybook

#### Jest and Cypress
testing-library - fetch helpers  
cypress video recording disabled  

#### Internationalization
i18next-react

#### Webpack
Currently we are using **webpack@next** (version 5-beta)  
Most of the noise in the bundling processes is ignored with the `stats` configuration, but a `stats.json` file is generated for the _production_ build  

[`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/) provides several options to custimize how and where your files are served  
Entry points, asset files, if and where to open the browser, etc.  
Please refer to the full documentation for a more fitting configurations  

Note that in the production configuration we generate source maps only for the _main_ bundle  
If you wish to hide your code you should prevent normal users from accessing the `sourcemaps/` directory in your server   

Performance hints are enable in production mode, but they are only watching for `.br` files  

browserlist - babel - postcss  

## Contributing
Use of git-flow

## Credit
Made by [Mateus F Torres](https://github.com/mateus-f-torres)    

## License
[MIT License](./LICENSE)
