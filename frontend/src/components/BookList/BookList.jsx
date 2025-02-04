import { useSelector, useDispatch } from "react-redux";
import { deleteBook, addToggle } from "../../redux/books/actionCreators";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import {
  selectTitleFilter,
  selectAuthorFilter,
} from "../../redux/slices/filterSlice";

import "./BookList.css";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const handleToggleFavorite = (id) => {
    dispatch(addToggle(id));
  };

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    return matchesTitle && matchesAuthor;
  });

  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, id) => (
            <li key={id}>
              <div className="book-info">
                {book.title} by {book.author}
              </div>
              <div className="book-actions">
                <div onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </div>

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
