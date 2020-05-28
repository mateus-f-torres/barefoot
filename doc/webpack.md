# Webpack Configuration
Most of the noise in the bundling processes is ignored with the `stats` configuration, but a `stats.json` file is generated for the _production_ build  

[`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/) provides several options to custimize how and where your files are served  
Entry points, asset files, if and where to open the browser, etc.  
Please refer to the full documentation for a more fitting configurations  

Note that in the production configuration we generate source maps only for the _main_ bundle  
If you wish to hide your code you should prevent normal users from accessing the `sourcemaps/` directory in your server   

Performance hints are enable in production mode, but they are only watching for `.br` files  

browserlist - babel - postcss  

