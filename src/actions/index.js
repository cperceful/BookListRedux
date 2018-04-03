export function selectBook(book) {
    //selectBook is an Action Creator, needs to return an Action- an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}