import { useSelector } from "react-redux";
import "./BookList.css";
const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <div className="book-info">
                {book.title} by {book.author}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default BookList;
