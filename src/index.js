import ReactDOM from 'react-dom';
import React from 'react';

//const is ES6 syntax. Declaring a variable.
//<div> - JSX. Dialect of JS.
const App = () => {
    return <div>Hi!</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));