import ReactDOM from 'react-dom';
import React from 'react';
import SearchBar from './components/search_bar.js';

const API_KEY='AIzaSyCZ2aQ73ZXf-eEwqn5XGkdHfNCCiNr91cY';

//const is ES6 syntax. Declaring a variable.
//<div> - JSX. Dialect of JS.
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));