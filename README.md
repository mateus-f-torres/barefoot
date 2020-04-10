[![Build Status](https://travis-ci.com/mateus-f-torres/barefoot.svg?branch=master)](https://travis-ci.com/mateus-f-torres/barefoot)
[![codecov](https://codecov.io/gh/mateus-f-torres/barefoot/branch/master/graph/badge.svg)](https://codecov.io/gh/mateus-f-torres/barefoot)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/mateus-f-torres/barefoot/blob/master/LICENSE)

# Barefoot
A boilerplate for a React Redux SPA.  
Complete with configurations and tools for a more agile development.  
Create from scratch (no CRA here) and in constant improvement as my knowledge grows.

## Index
* [Installation](#installation)
* [Usage](#usage)
* [Development](#development)
* [Architecture](#architecture)
* [Tech Stack](#tech-stack)
* [Auxiliary Tools](#auxiliary-tools)
* [Contributing](#contributing)
* [Credit](#credit)
* [License](#license)

## Getting Started
### Installation
Let's start by forking this repo.  
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
browserlist - babel - postcss

### Auxiliary Tools
The why and how I choose to use this tools in my development workflow.  
Most of them don't significantly change the code and could be easily removed or modified if needed.  
Their focus is to automate tasks that although important are tedious and repetitive to do.  
A super side bonus is ensuring a code style inside your repository, therefore leading to more productive PRs.  

* [Husky](#husky)
* [Prettier](#prettier)
* [ESLint](#eslint)
* [Others](#others)

#### Husky
[**Husky**](https://github.com/typicode/husky) helps us work with _git hooks_ in a more simple fashion.  
Hooks can run tasks in between our normal git workflow (similar to _pre_ and _post_ npm scripts).  
There are 3 hooks defined in `husky.config.js`  

##### pre-commit
Runs [**lint-staged**](https://github.com/okonet/lint-staged) on any file a developer tries to commit.  
At the moment whenever a `.js` file is to be committed that file is formatted, linted and tested.  
If any tool in the pipeline throws an error the **whole commit is denied** and a message is shown.  
This is to prevent "bad" code from entering the repository and to favor smaller, more focused commits.  

##### pre-commit-message
Continuing with the theme of small meaningful commits we now go to the actual message written.  
Commit messages matter but developers tend to either don't care or follow a personal style that is different from the rest.  
To make following a standard painless we use [**Commitizen**](https://github.com/commitizen/cz-cli) \(with the [**conventional-changelog**](https://github.com/commitizen/cz-conventional-changelog) flavor).  
Whenever `git commit` is called a form will appear on the command line to help you write the commit message.  

##### commit-msg
Developers can still use some other method besides `git commit`...  
So how can we ensure that the standards are followed ?  
Simple... We lint the message with [**commitlint**](https://github.com/conventional-changelog/commitlint).  
> NO COMMIT MESSAGE SHALL ESCAPE MY GAZE !!!

#### Prettier
Tabs or spaces, semicolons or no semicolons, single or double quotes, and a million other vain issues to discuss.  
Everyone has had that one meeting called only to argue about this things... please don't.  
Just change [**Prettier**](https://prettier.io/) and let's move on with our lives.  
PS: I'm using [**EditorConfig**](https://editorconfig.org/) as a fallback here... just in case.  

#### ESLint
Some things aren't so black and white when it comes to code quality and witting style.  
Javascript is a pretty awesome language in my opinion, but it does have some quirks that can trip newcomers.  
To help with those cases and to aid with the code style we are using [**ESLint**](https://eslint.org/) with [**Javascript Standard Style**](https://standardjs.com/).  

#### Others
* [**nvm**](https://github.com/nvm-sh/nvm), used to manage the project's `nodejs` version.
* [**Travis CI**](https://travis-ci.com/), used to build and run the full test suite on every PR.
* [**Codecov**](https://codecov.io/), used to provide the test coverage percentage of PRs.
* [**Netlify**](https://www.netlify.com/), used to deploy the project after the master branch is changed.

## Contributing
Use of git-flow

## Credit
Made by [Mateus F Torres](https://github.com/mateus-f-torres)    

## License
[MIT License](./LICENSE)
