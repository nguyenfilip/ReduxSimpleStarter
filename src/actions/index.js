export function selectBook(book) {
    console.log('hi!');
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}