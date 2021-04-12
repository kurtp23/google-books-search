import React, { useEffect, useState } from "react";
import Search from "../components/searchInput/search.js";
import Btn from "../components/searchInput/btn.js";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);

  // update the initial state to provide values for
  // the controls in the form (use empty strings)
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, []);

  // Loads all books and sets them to books
  function loadBooks() {
    // API.getBooks()
    //   .then(res =>
    //     setBooks(res.data)
    //   )
    //   .catch(err => console.log(err));
  }

  function handleInputChange() {
    // add code to control the components here
  }

  function handleFormSubmit() {
    // add code here to post a new book to the api
  }

  function deleteBook() {
    // add code here to remove a book using API
  }

  return (
    <>
      <div class="columns">
        <div class="column">
          <Search />
          <Btn />
        </div>
        <div class="column">Display Results</div>
        <div class="column">Display Saved</div>
      </div>
    </>
  );
}

export default Books;
