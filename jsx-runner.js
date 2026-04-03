// jsx-runner.js

// React & ReactDOM laden
const reactScript = document.createElement("script");
reactScript.src = "https://unpkg.com/react@18/umd/react.development.js";
document.head.appendChild(reactScript);

const reactDOMScript = document.createElement("script");
reactDOMScript.src = "https://unpkg.com/react-dom@18/umd/react-dom.development.js";
document.head.appendChild(reactDOMScript);

// Babel laden (für JSX!)
const babelScript = document.createElement("script");
babelScript.src = "https://unpkg.com/@babel/standalone/babel.min.js";
document.head.appendChild(babelScript);
