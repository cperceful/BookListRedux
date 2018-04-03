import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title} 
                className="list-group-item"
                onClick={() => this.props.selectBook(book)}
                >{book.title}</li>
            );
        });
    }
}

function mapStateToProps(state) {
    //Whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    };
}

//Anything returned from this function will end up as props on BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, result should be passed to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote BookList from component to container - needs to know about dispatch method selectBook, make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);