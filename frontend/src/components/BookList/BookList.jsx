import { useSelector, useDispatch } from "react-redux";
import {
  deleteBook,
  addToggle,
  selectBooks,
} from "../../redux/slices/booksSlice";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavorite,
} from "../../redux/slices/filterSlice";
import "./BookList.css";

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavorite = useSelector(selectOnlyFavorite);

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id));
  };

  const handleToggleFavorite = (id) => {
    dispatch(addToggle(id));
  };

  const highlightMatch = (text = "", filter = "") => {
    if (!filter.trim()) return text;

    const regex = new RegExp(`(${filter})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === filter.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      ?.toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesAuthor = book.author
      ?.toLowerCase()
      .includes(authorFilter.toLowerCase());
    const matchesFavorite = onlyFavorite ? book.isFavorite : true;
    return matchesTitle && matchesAuthor && matchesFavorite;
  });

  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {filteredBooks.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <div className="book-info">
                {highlightMatch(book.title, titleFilter)} by{" "}
                {highlightMatch(book.author, authorFilter)}
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
