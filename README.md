
# Namaste React

## ch 1 Inception

- What is Emmet?

Emmet uses different abbreviations and short expression depending on what is passed and based upon that it dynamically convert abbreviations into full code.

eg. inside html 
```
ul>li.item$*5
``` 
will be converted into 
```
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul> 
```
Emmet is built into vscode by default, and is mostly used for HTML, XML, and CSS, but it can also be used with programming languages.
https://docs.emmet.io/abbreviations/syntax/

---
- Difference between a Library and Framework?

Both are written by developers to help us perform some common task, diference is in terms of 
inversion on control, when using library we are incharge on flow of the application we choose when and where to call
library in our code.

when using Framework, framework is incharge of flow of the application. It provides some places for us to plug in our code, 
but it calls our pluged in code as needed.

eg: React is a library and Angular and Vue are the framework.

---
- what is CDN? Why do we use it?

Content delivery network(CDN) refer to a geographically distributed group of servers, which work together to provide 
fast delivery of internet Content.

CDN allows quick transfer of assets needed for loading Internet content incuding HTML pages, JS files, stylesheets, images and videos.
Popularity of CDN are growing day by day, today majority of web traffic is served through CDNs.

---
- Why is React known as React?

'React' name was chosen because the library designed to allow developer to "react" to changes to state and constantly changing data within the application, and to update the user interface in 
delarative and efficiant manner.
When data in react components changes, react will automatically re-render the component so that it reflects the new data.

---
- What is crossorigin in script tag?

crossorigin attribute on a script tag specify that CORS is supported when loading from external script file 
from third party server or domain. CORS is standard mechanism  used to retrieve files from other domains.

---
- What is diference between React and ReactDOM?

React and ReactDOM recently split into two different libraries. Prior to 0.14v all ReactDOM functionality was part of React.

ReactDOM is glue between react and DOM. Often, you will only use it for one single thing: mounting with ``ReactDOM.render()``
Another useful feature of ReactDOM is ``ReactDOM.findDOMNode()`` which we can use it to gain direct access to DOM element.

For Everything else mostly, there's react. You use React to define and create elements, for lifecycle hooks, etc i.e. guts of React application.

The reason why React and ReactDOM were split into two different library was  due to arrival of ReactNative.
React contains functionality utilized into both web and mobile apps. ReactDOM functionality is only utilized only in web apps.

---
- What is difference between react.development.js and react.production.js files via CDN?

react.development.js provides extra features like debugging, hot module reloading and lots of other stuff 
that we need while development of the application.

react.production.js has uglify and  minified version of react code which is more optimized to run on client machines. It makes  rendering of file on end user's browser very quick and performance enchancing.
 
 The production and development build come into the picture just because of performance impact in real life deployed the application.

---
- What is async and defer? 

browser parses the html first and when it encounter a <script> tag its pauses parsing html and fetches the script from the internet 
and executes it then and there.

when <script> tag has a asynch attribute its fetches the script asynchronusly parallel to html parcing and when these are fethes html parsing stops and  executes it then html parsing start again,
but you might to be carefull if you have dependent scripts to be fecthed because asynch attribute does not guarantee any order.

in case of defer attribute html parsing goes and script are fectched in parallel and these script are only executed when the html parsing is complete.

---

- what is rel stylesheet in html e.g. 
``<link rel="stylesheet" href="index.css" />`` ?

The required rel attribute specifies the relationship between the current document and the linked document/resource.

---
## ch 2 Ignition App

- What is NPM?

NPM is a tool used for package management and it is a default package manager for node projects. NPM is installed when nodejs is installed on the machine. It comes with command-line Interface(CLI) used to interact with the online database of npm. This database is called npm regestry and it hosts public and private packages. To add or update package, we use the NPM cli to interact with this database.

---

- How to initialize npm?

``` 
npm init
``` 
`npm init -y` can be used to skip the setup steps, npm takes care of it and creates package.json file automatically, but without configuration.

---

- What is `Parcel/webpack` ? Why it is needed?

Parcel/webpack is type of a web application bundler used for development and productions purposes or power aour apps with different type of cuntionalities and features
It offer Blazing fast performance utilizing multicore functionality, and require zero configuration. Parcel can take any type of file as an entry point, but an HTML or Js file is a good place to start with.

### Parcel Features 

 * HMR(Hot Module replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
 * File watcher algo(c++)
 * compression 
 * dev and production builds
 * poly fills (replace variable names)
 * port management
 * minification
 * bundling
 * cleaning our code
 * Image optimization
 * super fast build algorithm
 * cache while development
 * compatibility with older browsers - it uses
 * support Https in dev
 * consistant hashing algo
 * zero configuration

### installation commands:
- Install:
```
npm install -D parcel
```
`-D` is used for development and as a development dependecy.

- Parcel commands :
    - For development build:
    ```
    npx parcel <entry_point>
    ```
    - for production build :
    ```
    npx parcel build <entry_point>
    ```

---

- what is `.parcel-cache`

`.parcel-cache` is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

--- 

- what is `npx`?

`npx` is tool that is used to execute the packages. It comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

--- 

- what is the different between `dependencies` vs `devDependencies`?

Dependencies should contain library and framework in which your app is built on, needs to function effectively. such as Vue, React, Angular, Express, Jquery etc
DevDependencies should contain modules/package a developer a developer needs during development such as parcel,webpack,vite, mocha.
These packages are necessary only while you are developing your project, not necessary on production.
to save a dependecy as a devDepedency on installation we need to do, `npm install --save-dev` instead of just, `npm install --save`

---

- what is tree shaking?

The shaking is process of removing the unwanted code that we do not use while developing the application. In computing, tree shaking is a dead code elimination technique that is applied when optimizing code.

---

- What is Hot module replacement?

Hot module replacement (HMR) exchanges, adds, or removes modules while an applicaton is running, without a full reload. This can significantly speed up development in a few ways: retain application state which is lost during a full reload.

---

- List down your favorite 5 superpowers of parcel and describe any 3 of them in your own words.

 * HMR - adds, or removes modules while an application is running, without a full reload.
 * file watcher algorithm - file watchers monitor directories on file system and perform specific actions when desired files apprear.
 * minification - minification is process of minimizing code and markup is your web pages and script files.
 * Image optimization
 * caching while development

 ---

 - what is `.gitignore`? what should we add and not into it?

 The .gitignore file is a text file that tells Git which files or folders to ignore in a project during commit to the repository.
 The types of files you should consider adding to a .gitignore file are any files that do not need to get committed. for example, package-lock.json should not add into your .gitignore files.

 The entries in this file can also follow a pattern matching.
 ```
 * is used as a wildcard match
 / is used to ignore pathnames relative to the .gitignore file
 # is used to add comments to a .gitignore file
 ```
 Below are some example of what .gitignore file could look like:
 ```
 # Ignore Mac system files
 .DS_store

 # Ignore node_module folder
 node_modules

 # Ignore all text files
 *.txt

 # Ignore file related to API keys
 .env

 # Ignore SASS config files
 .sass-cache
 ```

---

- what is the difference between `package.json` and `package-lock.json`

`package.json`
* this file is mandatory for every project
* It contains basic information about the project
* application name/version/scripts

`package-lock.json`
* this file is automatically generated for those operatios where npm modifies either the node_module tree or package-json.
* It is generated after an npm install
* It allows future devs & automated systems to download the same dependencies as the project.
* It also allows to go back to the past version of the dependencies without actual `committing the node_modules folder`
* It records the same version of the installed packages which allows to reinstall them.

Future install will be capable of building identical description tree.

**~** or **^** in a `package.json` file:

These are used with the version of package installed

for example in `package.json` file:
```
"dependencies" : {
    "react" : "^18.2.0",
    "react-dom": "^18.2.0"
}
```

* **~** : "approximately equivalent to version", will update you to all future patch versions, without incrementing the minor version.

* **^** :  "Compatible with version", will update you to all future minor/patch versions, without incrementing the major version.

> If none of them is present, that means only the version specified in `package.json` file is used in the development

---

- Why should I not modifiy `package-lock.json`?

`package-lock.json` file contains the information about the dependencies and their versions used in the project. Deleting it would cause dependencies issues in the production environment. so dont modify it, it's being handle by npm automatically.

---

- what is `node_modules`? is it a good idea to push it on git?

`node_modules` folder is like cache for the external modules required in the our project. when you npm install, they are downloaded from the web(npm registry) and copied into node_modules folder and nodejs is trained to look for them there when you import them(without a specific path). Dont push `node_modules` in github because it contains lots of files (more than 100 MBs) it will cost you memory and internet bandwidth. Node_module can we re-created using package-lock.json or package.json file easily.

---

- what is `dist` folder?

The `/dist` folder contains  the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on the production web application. Along with the minified code, the `/dist` also comprises of the all compiled modules that may or may not be used with other systems.

---

- What is `browserslist`?

Browserslist is tool that allows specifying which browsers should be supported in  your frontend app by specifying "queries" in a config file. Its used by frameworks/libraries such as React, Angular and Vue, but its not limited to them.