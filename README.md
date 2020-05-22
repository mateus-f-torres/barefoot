[![Netlify Status](https://api.netlify.com/api/v1/badges/ba3f22ea-0790-413a-be14-7ccf8972d61f/deploy-status)](https://app.netlify.com/sites/barefoot/deploys)
[![Build Status](https://travis-ci.com/mateus-f-torres/barefoot.svg?branch=master)](https://travis-ci.com/mateus-f-torres/barefoot)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/mateus-f-torres/barefoot/blob/master/LICENSE)

# Barefoot
A React PWA kitchen sink style template.  
Complete with configurations and tools for a more agile development.  
Create from scratch and in constant improvement as my knowledge grows.

This project was at some point unnecessary robust for a template.  
We had `Redux`, `storybook`, `styled-component`, `i18next` and `jest` among other things.  
But whenever I would start a new project with this template I had a lot of cleaning up to do.  

That is why its called Barefoot... I provide the bare minimun optimization for your development workflow.  
If you choose to wear sandals and add `styled-component` or prefer sneakers with `redux` that is up to you.  
Either way most of the configuration wont change, maybe you need to add or remove a line in `webpack.config.js`.  

## Coding Time
### Fork/Clone
Start by forking this repo.  
To do that you just need to click the **Fork** button at the top of the page.  

After creating a "fork" of the project you can then access **Settings** and change the project name.  
You can also continue with the same name if you wish to open PRs to me.

```
git clone https://github.com/[your-user-name]/[your-project].git
```
Click on the **Clone or download** button in your project's page, copy the link and clone.  

Remember to keep the original **LICENSE** and credit me and this project in your own **README**.  

### Development
```
npm install
```
Install the dependencies with your package manager of choice.  
I use `npm` to keep things simple here in the documentation.  

```
npm run start
```
This will serve the application in _development_ mode with `webpack-dev-server` at `localhost:8080`.  
Any changes made to files inside `src` will automatically trigger a hot-reload of the app.  

All the automatic formatting, linting and testing is handled by _git hooks_.  
So instead of wasting time on unfinished code I prefer to only watch code that is being committed.  
To learn more about it check the [Auxiliary Tools](https://github.com/mateus-f-torres/barefoot/blob/master/doc/tools.md) documentation.  

### Production
```
npm run build
```
Call `webpack` in _production_ mode to bundle, minify and compress your application.  
The finished product will be at the `dist` directory.   

```
npm run serve
```
If you want to see the production version of your application use the `serve` script.  
The `dist/` directory will be served locally with [`http-server`](https://github.com/http-party/http-server) to `localhost:8080`.  
Compressed formats and catch-all redirect is already baked in the script.    

How you deploy your application I leave it up to you.  
Here I'm using [**Travis-CI**](https://travis-ci.org/) and [**Netlify**](https://www.netlify.com/) for this.  
To learn more about how things are bundled check the [Webpack Configuration](https://github.com/mateus-f-torres/barefoot/blob/master/doc/webpack.md) documentation

## License
[MIT License](./LICENSE)  
Made by [Mateus F Torres](https://github.com/mateus-f-torres)    
