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
        //With value=, we turn input into controlled component.
        //
        return <div className="search-bar">

            <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}/>
            Value of the input: {this.state.term}
        </div>;
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);

    }
}

export default SearchBar;