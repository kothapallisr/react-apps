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

// React element is an object
const heading = <h1>heading React element</h1>;
const Heading = () => {
  <h1>Heading Functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a react element inside the root
// React element is an object
const element1 = React.createElement(
  "h2",
  { id: "element1", key: "h1" },
  "Element One"
);

// JSX => React.createElement => Object => HTML(DOM).
// Babel understands your JSX and converts it into React.createElement.
// JSX is created to empower React.
// React always trys to developer experience better.
// Readability, maintainability,
// Babel comes along with Parcel as a dependency. Check package-lock.json inside the node_modules.

// React Component
// - Functional Components
// - Class based Components

// Functional component is a function which returns JSX
// name of component starts with Capital letter

// XSS attack - Cross Site Scripting attack => putting malicious code in JavsScript api
// JSX takes care of security of code. JSX sanitises code.
// Component Composition => composing Components => passing Components into a Component

// read this: React key reconciliation, Diff Algorithm
// What is JSX using behind the scenes? => React.createElement()

// you need to have Babel inorder to make JSX work

let messi = 10;

const HeaderComponent = () => {
  return (
    <div>
      {heading}
      {Heading()}
      {messi}
      <h1>Hello React Functional Component</h1>
      <h2>this is a h2 tag</h2>
    </div>
  );
};

const HeaderComponent2 = () => {
  <div>
    <h1>Hello React Functional Component</h1>
    <h2>this is a h2 tag</h2>
  </div>;
};

console.log(element1);
const element2 = React.createElement(
  "h2",
  { id: "element2", key: "h2" },
  "Element Two"
);

// JSX - HTML like syntax
const element3 = <h1>Hello React</h1>;

const container = React.createElement("div", { id: "container" }, [
  heading,
  element1,
  element2,
  element3,
]);
root.render(<HeaderComponent />);
//root.render(HeaderComponent());
