/**
 *  Created a Server
 *  HMR - Hot Module Replacement
 *  File Wather Algorithm - (writtern in C++)
 *  BUNDLING
 *  MINIFY
 *  Cleaning our code
 *  Dev and Production build
 *  Super fast build algorithm
 *  Image optimization
 *  Caching while development
 *  Compression
 *  Compatible with older version of Browser
 *  HTTPS on dev
 *  Parcel manages port numbers
 *  Parcel uses "Consistent Hashing algorithm" to do all that bundling
 *  Zero config bundler
 *  Tree Shaking - removing unwanted code
 *
 *
 *
 *
 *  [Transitive dependencies- dependencies of dependencies]
 *
 *  - we should put .parcel-cache in .gitignore
 *  - anything which is auto generated should be put in gitignore
 *
 */

import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
  "h1",
  {},
  "Sri Saibaba Sarath Babuji ki jai!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root
const element1 = React.createElement("h2", { id: "element1" }, "Element One");
const element2 = React.createElement("h2", { id: "element2" }, "Element Two");
const container = React.createElement("div", { id: "container" }, [
  heading,
  element1,
  element2,
]);
root.render(container);
