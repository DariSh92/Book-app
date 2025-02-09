Book Library App using React + Vite

This is a  Book Library App built with React, Redux, and styled-components. It allows users to add, remove, and filter books, as well as mark them as favorites. The app also includes a feature to add random books either manually, from a predefined list, or through an API.

Features
Add a Book: Users can manually add a book by entering its title and author.
Random Book: Users can add a random book from a predefined list or via an API.
Delete Books: Books can be deleted from the list.
Mark as Favorite: Users can toggle the favorite status of a book.
Search and Filter: The app supports filtering by title, author, and favorites.
Error Handling: Error messages are displayed if necessary fields are not filled or other issues occur.
Components
BookForm
This component handles the form for adding a new book. It allows users to enter the title and author of a book and submit it. There are also buttons to add a random book from a predefined list or via an API.

State:

title: The title of the new book.
author: The author of the new book.
isLoading: A flag to indicate when the app is fetching a random book via the API.
Actions:

handleSubmit: Adds a new book manually.
handleAddRandomBook: Adds a random book from a predefined list.
handleAddRandomBookAPI: Adds a random book via an API request.
BookList
This component displays a list of books with options to delete them or mark them as favorites. It also highlights matching text when filtering.

State:

books: The list of books to be displayed.
titleFilter: The current filter for book titles.
authorFilter: The current filter for book authors.
onlyFavorite: A flag to filter only favorite books.
Actions:

handleDeleteBook: Deletes a book.
handleToggleFavorite: Toggles the favorite status of a book.
Error
This component listens for error messages in the Redux store and displays them as toast notifications.

State:
errorMessage: The error message to be displayed.
Filter
This component allows users to filter books by title, author, or favorite status. It also provides a button to reset all filters.

State:

filterInput: The current title filter value.
filterAuthor: The current author filter value.
onlyFavorite: A flag to filter only favorite books.
Actions:

handleInputChange: Updates the title filter.
handleAuthorChange: Updates the author filter.
handleResetFilters: Resets all filters.
handleOnlyFavoriteChange: Toggles the "only favorite" filter.
Technologies Used
React: For building the user interface.
Redux: For state management.
React Icons: For using icons in the app.
React Toastify: For displaying error messages as toast notifications.
Styled-components: For styling the app.
