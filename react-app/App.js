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

const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://content.jdmagicbox.com/comp/kurnool/k2/9999p8518.8518.220121104830.i4k2/catalogue/-ddu43zqnzt.jpg"
    ></img>
  );
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
// Config driven UI

// Virtual DOM - representation of a DOM
// Reconciliation - (Diff algorithm) - on re-render the specific portion of your app which is found by Diff algorithm.
// read this: "React Fiber" (it is introduced in React 16, new Reconciliation engine in React 16). Read this in github repository: github.com/acdlite/react-fiber-architecture
// it is not recommended to use index as a "key"
// no key << index key(ok way, use only if you don't have anything) << unique key (best practice)

const restraunt = {
  name: "Instawich",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/155e3a33e943393b2efe1cc937f8c2ec",
  cusines: ["Snacks", "Beverages"],
  rating: "4.3",
};
const RestrauntCard = () => {
  return (
    <div className="card">
      <img src={restraunt.image}></img>
      <h2>{restraunt.name}</h2>
      <h3>{restraunt.cusines.join(", ")}</h3>
      <h4>{restraunt.rating} stars</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restraunt-list">
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
    </div>
  );
};

const Footer = () => {
  return <h3>Footer</h3>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
// JSX - HTML like syntax
const element3 = <h1>Hello React</h1>;

root.render(<AppLayout />);
//root.render(Header());
