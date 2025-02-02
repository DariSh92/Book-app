import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/actionCreators";
import "./BookList.css";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const handleDeleteBook = (id) => {
    console.log(deleteBook(id));
    dispatch(deleteBook(id));
  };
  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, id) => (
            <li key={id}>
              <div className="book-info">
                {book.title} by {book.author}
              </div>
              <div className="book-actions">
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default BookList;
