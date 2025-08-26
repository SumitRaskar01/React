# React 18 - My Learnings
1. For a quick setup we used unpkg CDN. But in real world apps react is installed via npm.

2. In index.html file we integrated react and react dom via script tag and unpkg cdn.

3. In "App.js" we created a component(function) which returns a JSX i.e createElement creates virtual DOM Node which takes 3 arguments those are- type, props, children   
- type: the HTML tag name or React component to render (e.g. 'div' or MyComponent)
- props: an object containing attributes or props for the element
- children: the content inside the element, which can be strings, elements, arrays, etc.

4. We select the root DOM node from index.html and pass it to ReactDOM.createRoot() to initialize a React root container, enabling React to manage rendering inside it.

5. We use .render(App) on the root created by ReactDOM.createRoot() to mount the App component. React compares the virtual DOM and updates the actual DOM accordingly.

6. React uses a diffing algorithm to compare the current virtual DOM with the new virtual DOM. It then calculates the minimal changes needed and updates the real DOM efficiently.

7. Reconciliation- Reconciliation is the process React uses to compare the previous and new virtual DOM trees to determine the minimal set of updates required in the actual DOM.