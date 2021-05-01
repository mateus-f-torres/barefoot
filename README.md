[![Netlify Status](https://api.netlify.com/api/v1/badges/ba3f22ea-0790-413a-be14-7ccf8972d61f/deploy-status)](https://app.netlify.com/sites/barefoot/deploys)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/mateus-f-torres/barefoot/blob/master/LICENSE)

# Barefoot

A React PWA kitchen sink style project template.  
Complete with configurations and tools for a more agile development.  
Created from scratch and in constant improvement as my knowledge grows.

**tl;dr**  
`git clone [repository]`  
`git flow init -d`  
`git push origin -u develop`  
`git flow feature start setup`

- rename project (`README.md`, `manifest.json`, `package.json`, `index.html`)
- remove unnecessary files, configurations and `doc/` folder
- remove unnecessary dependencies
- run `yarn install`

## Getting Started

### Forking

Fork this repo by clicking **Fork** button at the top of the page.  
After creating a fork of the repo you can then access **Settings** and change the project name.

```
git clone https://github.com/[your-user-name]/[your-project].git
```

Click on the **Clone or download** button in your project's page, copy the link and clone.  
Remember to keep the original **LICENSE** and credit me and this project in your own **README**.

### Development

```
yarn install
```

Install the dependencies with your package manager of choice.  
I use [*yarn v2*](https://yarnpkg.com/) as this project's main package manager.  

```
yarn start
```

This will serve the application in _development_ mode with `webpack-dev-server` at `localhost:8080`.  
Any changes made to the files inside `src` will automatically trigger a hot-reload of the app.

### Production

```
yarn build
```

Call `webpack` in _production_ mode to bundle, minify and compress your application.  
The finished product will be at the `dist` directory.

```
yarn serve [app_name] [local_port]
```

Set up a docker image and serve your project with nginx.  
If no `app_name` and `local_port` is given, default to `barefoot` `8080`.

### Deployment

How you deploy your application I leave it up to you.  
Here I'm using [**Netlify**](https://www.netlify.com/).

## Overview

### Source Structure

```
src/
├── assets
│   ├── fonts/
│   ├── logo/
│   └── manifest.json
├── components
│   └── App
│       └── App.tsx
├── index.css
├── index.html
├── index.tsx
├── sw
│   ├── sw.js
│   └── register.js
└── utils
    ├── request.ts
    └── urls.ts
```

### Main Libraries



### Tools and Configurations

All the automatic formatting, linting and testing is handled by _git hooks_.  
So instead of wasting time on unfinished code I prefer to only watch code that is being committed.  
To learn more about it check the [Auxiliary Tools](https://github.com/mateus-f-torres/barefoot/blob/master/doc/tools.md) documentation.

One very important aspect of this template is how your application is served to users.  
There is no silver bullet when it comes to code optimization and bundle generation.  
Knowing this I created a configuration that can be used as a foundation for more advanced and specific needs.  
For a more in depth look at this configuration refer to the [Webpack Configuration](https://github.com/mateus-f-torres/barefoot/blob/master/doc/webpack.md) documentation.

## About the Project

This project was at some point unnecessarily robust for a template.  
I had `redux`, `storybook`, `styled-component`, `i18next` and `jest` among other things, but whenever I would start a new project with this template I had a lot of cleaning up to do.

Then I remembered why I started this project and why I choose to name it **Barefoot**  
I provide what I would call "bare minimum configurations and optimizations" for a normal web app development workflow.  
As minimum as the complex structure of bones, muscle and joints you have available at your feet.

What you add on top of it depends on where you are going, but, if you don't know where that is, this might be a good starting point.  
If you choose to wear sandals and add `styled-component` or prefer sneakers with `redux` that is up to you.  
Good coding \ (•◡•) / !

## License

[MIT License](./LICENSE)  
Made by [Mateus F Torres](https://github.com/mateus-f-torres)
