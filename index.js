import React, { Component } from "react";
import ReactDom from "react-dom/client";
import Header from "./Assignments/03-Assignment/Header/Header.jsx";
import { useState } from "react";
import User from "./Assignments/08-Assignment/User.js";
import UserClass from "./Assignments/08-Assignment/UserClass.js";

const title = React.createElement(
  "h1",
  { id: "title" },
  "Hello World from React"
);

// JSX (transpiled to React.createElement) => ReactElement => Js Object => HTML element render

// (transpiled before it reaches the browser, usually by Babel or a similar tool)

// JSX => React.createElement =>ReactElement => Js Object => HTML element render

// single line JSX => <h1>Hello World from React</h1>
// multi line JSX =>  Wrapped (<h1 id="heading">
// \Hello World from React
// </h1>)
// React element
const headingJSX = (
  <>
    <h1 className="heading">This is JSX</h1>
  </>
);
// console.log(heading);//object

// Functional Component: returns a react element -> JSX

const HeadingComponent2 = () => {
  console.log(useState);
  return <h1 id="heading">h1 from functional Component 2</h1>;
};

const data = "This is 100 data from variable";
const HeadinComponent = () => {
  return (
    <>
      <h1>{console.log("xbsidoifjdas")}</h1>
      <h2>{1000 + 2}</h2>
      <h3>{data}</h3>
      {title}
      <HeadingComponent2></HeadingComponent2>
      <h1>h1 from functional Component</h1>
    </>
  );
};

class About extends Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component Did Mount");
  }

  render() {
    console.log("parent render");
    return (
      <>
        <h1>About</h1>
        <UserClass name={"First"} location={"New York"} />
      </>
    );
  }
}
console.log(headingJSX); //object
console.log(title); //object

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<About />);
