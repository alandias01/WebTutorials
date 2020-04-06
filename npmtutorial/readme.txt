npm init -y
npm i -D webpack webpack-cli @webpack-cli/init webpack-dev-server style-loader css-loader

webpack
without webpack.config.js, webpack assumes entry point of project is src/index and will
output result in dist/main.js minified and optimized

To create config file, copy off internet or use 
npx webpack-cli init

mkdir dist
 create index.html, add to bottom in body tag <script src="main.js"></script>
mkdir src 
 create index.js

index.js
 import $ from jquery
 var Rx = require('rxjs/Rx')
 var agGrid = require('ag-grid-community/main');
 import 'ag-grid-community/dist/styles/ag-grid.css';
 import 'ag-grid-community/dist/styles/ag-theme-balham.css';


NPM tutorial
npm init -y creates a package.json file

{
  "name": "app1",  "version": "1.0.0",  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "t1": "echo \"hi\"",
    "build": "node index.js"
  },
  "keywords": [],  "author": "",  "license": "ISC"
}

npm run build

WebPack
webpack is a module bundler for JavaScript applications. 
When webpack processes your application, it internally builds a dependency graph 
which maps every module your project needs and generates one or more bundles.

Problem, before webpack
Lets say you have 2 javascript files a.js and b.js.  If a.js has a line of code that depends on 
a variable inside b.js, then in your index.html file, you have to refernce that file first

<script src="b.js"></script>
<script src="a.js"></script>

Instead, use webpack.  npm i webpack webpack-cli

Inside your entry point js file, say index.js, at the top of the file, you can write your 
import statements for files that you need.  

index.js
import {vehicle} from ./

stuff.js
export var myButton = document.querySelector

import is an ES6 feature and you have to specify 
to use ES6 but things like import and export are understood by webpack for convenience
To use ES6, you'll have to use a transpiler like babel.js with webpack
