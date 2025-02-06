import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import { addBook, fetchBook } from "../../redux/slices/booksSlice";
import { setError } from "../../redux/slices/errorSlice";
import createBookWithID from "../../utils/createBookWithID";
import booksData from "../../data/books.json";
import "./BookForm.css";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    const randomBookID = createBookWithID(randomBook, "random");
    dispatch(addBook(randomBookID));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author }, "manual")));

      setAuthor("");
      setTitle("");
    } else {
      dispatch(setError("Title and author are required"));
    }
  };

  const handleAddRandomBookAPI = async () => {
    try {
      setIsLoading(true)
      await dispatch(fetchBook());
      
    } finally {
      setIsLoading(false)
      
    }
  };

  // const handleAddRandomBookAPI = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:4000/random-book");
  //     if (response.data && response.data.title && response.data.author) {
  //       dispatch(addBook(createBookWithID(response.data, "API")));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">AddBook</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add random book
        </button>
        <button
          type="button"
          onClick={handleAddRandomBookAPI}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span>Loading Book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            "Add random book via API"
          )}
        </button>
      </form>
    </div>
  );
};
export default BookForm;
