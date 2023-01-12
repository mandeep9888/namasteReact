
# Namaste React

## week 1

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

