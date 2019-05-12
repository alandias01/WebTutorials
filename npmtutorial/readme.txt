webpack
without webpack.config.js, webpack assumes entry point of project is src/index and will
output result in dist/main.js minified and optimized

npm init -y
npm i jquery webpack webpack-cli style-loader css-loader rxjs rxjs-compat ag-grid-community

in package.json, scripts section under "test", add "build":"webpack"
create webpack.config.js, add css part

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