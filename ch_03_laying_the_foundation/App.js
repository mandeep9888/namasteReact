/**
 * parcel supports( read documentation)
 * ---------------------
 *
 * HMR - hot module replacement (reloading)
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

const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1", {}, "Hello from react !!!");
root.render(heading);

const heading1 = React.createElement(
  "h1",
  {
    id: "target1",
    key: "key1",
  },
  "Hello from parcel"
);
const heading2 = React.createElement(
  "h1",
  {
    id: "target2",
    key: "key2",
  },
  "Heading 2"
);

const head = (
  <h1 id="head1" className="dummy">
    {heading1}
    This is a heading
  </h1>
);

// React components
// class based component - OLD
// functional component - New

// functional component - javascript function that return a piece of jsx/react element

const TitleComponent = () => (
  <h1 className="title">This is a functional componenet</h1>
);

// const TitleComponent1 = () => {
//   return <h1 className="title">This is a functional componenet</h1>;
// };

const HeadingComposition = () => (
  <>
    <div>
      {TitleComponent()}
      <TitleComponent />
      <TitleComponent></TitleComponent>
      {head}
      <h1> this is a another component</h1>
    </div>
    <div>
      <h1>this is heading</h1>
    </div>
  </>
);

const container = ReactDOM.createRoot(document.getElementById("container"));
container.render([heading1, heading2]);
root.render(<HeadingComposition />);
