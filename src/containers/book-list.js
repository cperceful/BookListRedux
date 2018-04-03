import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <li key={book.title} className="list-group-item">{book.title}</li>
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

export default connect(mapStateToProps)(BookList);