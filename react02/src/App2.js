import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const App = (props) => {
  console.log(props);
  
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App2 = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "React Variants"),
    React.createElement(App, {name: "React-18", description: "Came Earlier"}),
    React.createElement(App, {name: "React-19", description: "Latest"}),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App2));
