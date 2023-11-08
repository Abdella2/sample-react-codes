// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
const element = <h1>Hello world!!!</h1>;
console.log(element);

console.log(<h2>another hello world</h2>);

// ReactDOM.render(element, document.getElementById('root'));

createRoot(document.getElementById('root')).render(element);
