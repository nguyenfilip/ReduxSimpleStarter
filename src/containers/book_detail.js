import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

//Container is component that has direct access to Redux
class BookDetail extends Component {

    render() {

        if (!this.props.book) {
            return <div>Select a book to get started</div>;
        }

        return <div>
            <h3>Detail for</h3>
            <div>{this.props.book.title}</div>
            <div>Pages: {this.props.book.pages}</div>
            </div>
    }

}

//We need to add pieces of state to our container and also
//add actions to our container
function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);