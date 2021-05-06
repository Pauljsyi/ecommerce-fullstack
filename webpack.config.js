
// this file is run with npm run build
// it uses babel to compile everything in client/src into bundle.js
// path package allows the use of path.resolve(__dirname, 'relative path')
const path = require('path');

//webpack expects this module to export the config object
module.exports = {
// Specify configuration options
  //the entry point.  This file will import all other modules in your app and will start from this file during the build process
  entry: path.resolve(__dirname, './client/src'),
  // the output.  specifies the file that will be generated as a result of the build process and pass to the directory where this file should be generated.
  output: {
    //bundle.js will be generated inside the directory named dist
    path: path.resolve(__dirname, './client/dist'),
    //the file that will be created
    filename: 'bundle.js'
  },
  //mode tells webpack to use its built-in optimizations accordingly
  //if mode is not set, production is the default value
  mode: 'development',
  // modules. determine how different types of modules will be treated
  module: {
    //rules. modifies how the module is created
    rules: [
      {
        //loaders help us preprocess our files using babel-loader
        // transpiles JS files using webpack and Babel
        loader: 'babel-loader',
        // find these extensions and transpile it to es5 syntax
        test: /\.js[x]?/,
        // exclude. telling webpack to ignore these dependencies to prevent performance issues
        exclude: /node_modules/,
        // the loader that will be applied
        options: {
          //babel/preset-env. allows the use of latest JS and transpiles it down to es5
          //babel/preset-react. support for JSX
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  // helps webpack find the module code that needs to be included
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};