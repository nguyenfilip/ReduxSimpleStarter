import React, {Component} from 'react';

//Functional component - when its just a simple function
// const SearchBar = () => {
//     return <input />;
// }

//Class based component - has state
// class SearchBar extends React.Component {
class SearchBar extends Component {

    constructor(props) {
        super(props);
        //Initialization of state
        //state object can be changed only here, in constructor.
        this.state = {term:''} ;
    }

    render() {
        //Add change JS event
        return <div>
            <input onChange={event => this.setState({term:event.target.value})}/>
            Value of the input: {this.state.term}
        </div>;
    }

}

export default SearchBar;