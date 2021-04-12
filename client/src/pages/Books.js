import React, { useEffect, useState } from "react";
import Search from "../components/searchInput/search.js";
import Btn from "../components/searchInput/btn.js";
import BookCards from "../components/searchContainer/bookCards.js";
import axios from "axios";

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
  console.log(books);
  const googleCall = () => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=LionKing")
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Loads all books and sets them to books
  function loadBooks() {}

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
          <Btn onClick={googleCall} />
        </div>
        <div class="column">
          {books.map((item) => {
            return <BookCards title={item.volumeInfo.title} author={item.volumeInfo.author} />;
          })}
        </div>
        <div class="column">Display Saved</div>
      </div>
    </>
  );
}

export default Books;
