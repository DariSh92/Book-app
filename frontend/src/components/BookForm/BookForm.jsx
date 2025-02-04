import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addBook } from "../../redux/slices/booksSlice";
import createBookWithID from "../../utils/createBookWithID";
import booksData from "../../data/books.json";
import "./BookForm.css";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    const randomBookID = createBookWithID(randomBook);
    dispatch(addBook(randomBookID));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author })));

      setAuthor("");
      setTitle("");
    }
  };

  const handleAddRandomBookAPI = async () => {
    try {
      const response = await axios.get("http://localhost:4000/random-book");
      if (response.data && response.data.title && response.data.author) {
        dispatch(addBook(createBookWithID(response.data)));
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <button type="button" onClick={handleAddRandomBookAPI}>
          Add random book via API
        </button>
      </form>
    </div>
  );
};
export default BookForm;
