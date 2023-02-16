/**
 * parcel supports( read documentation)
 * ---------------------
 * 
 * HMR - hot module replaement (reloading)
 * File watcher algo(c++)
 * compression 
 * dev and production builds
 * poly fills (replace variable names)
 * port management
 * minify
 * bundling
 * cleaning our code
 * Image optimization
 * super fast build algorithm
 * cache while development
 * compatibility with older browsers
 * support Https 
 * consistant hashing algo
 * zero configuration
 * 
 * ------
 * npx parcel build
 * npx parcel index.html(entry point)
 * 
 */

import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'));
const heading = React.createElement('h1',{}, "Hello from react !!!");
root.render(heading);

const heading1 = React.createElement('h1',{
  id: "target1"
}, "Hello from parcel");
const heading2 = React.createElement('h1',{
  id: "target2"
}, "Heading 2");

const container = ReactDOM.createRoot(document.getElementById('container'));
container.render([heading1, heading2]);
root.render(heading);