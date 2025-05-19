import React from "https://esm.sh/react@19.1.0/";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const Device = (props) => {
    console.log(props)
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.cost),
    ]);
};

const App = () => {
    return React.createElement("h1", {}, [
        React.createElement("h1", {}, "Devices"),
        React.createElement(Device, { name: "Smartphone", cost: 100000 }),
        React.createElement(Device, { name: "Laptop", cost: 90000 }),
        React.createElement(Device, { name: "PC", cost: 150000 }),
        React.createElement(Device, { name: "Tab", cost: 70000 }),
    ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
