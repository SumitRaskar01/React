const mainContainer = document.getElementById("root")

//A try to replicate basic React Functionality
// function renderElement(reactElement, container){
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute("href", reactElement.props.href)
//     domElement.setAttribute("target", reactElement.props.target)

//     container.appendChild(domElement)
// }

//A try to replicate basic react functionality and looping on attributes
function renderElement(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}



const reactElement = {
    type: "a",
    props: {
        href: "https://www.google.com/",
        target: "_blank"
    },
    children: "Click to open Google"
}

const reactElement2 = {
    type: "img",
    props: {
        src: "https://images.unsplash.com/photo-1747747004644-4ab29224deee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        height: "300px",
        width: "300px"
    },
    children: "How are you"
}


renderElement(reactElement, mainContainer)
renderElement(reactElement2, mainContainer)