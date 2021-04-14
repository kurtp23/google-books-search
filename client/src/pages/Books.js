import React, { useEffect, useState } from "react";
import Search from "../components/searchInput/search.js";
import Btn from "../components/searchInput/btn.js";
import BookCards from "../components/searchContainer/bookCards.js";
import SavedCards from "../components/searchContainer/SavedCards.js";
import Api from "../utils/API.js";
import axios from "axios";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState();
  const [savedBooks, setSavedBooks] = useState([]);

  // update the initial state to provide values for
  // the controls in the form (use empty strings)
  const [formObject, setFormObject] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    Api.getBooks().then((data) => {
      setSavedBooks(data.data);
    });
  }, [savedBooks]);
  const googleCall = () => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=" + search;
    axios
      .get(url)
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Loads all books and sets them to books

  function handleInputChange(event) {
    setSearch(event.target.value);
    console.log(event.target.value);
  }

  function handleFormSubmit() {
    // add code here to post a new book to the api
  }

  function deleteBook() {
    // add code here to remove a book using API
  }

  return (
    <>
      <div className="columns">
        <div className="column">
          <Search handleInput={handleInputChange} result={search} />
          <Btn onClick={googleCall} />
        </div>
        <div className="column">
          {books.map((item) => {
            return (
              <BookCards
                title={item.volumeInfo.title}
                author={item.volumeInfo.authors}
                image={
                  item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "no image"
                }
                description={item.volumeInfo.description}
                id={item.id}
                bookSave={Api.saveBook}
              />
            );
          })}
        </div>
        <div className="column">
          {savedBooks
            ? savedBooks.map((item) => {
                return (
                  <SavedCards
                    title={item.title}
                    author={item.authors}
                    image={item.image ? item.image : "no image"}
                    description={item.description}
                    id={item.id}
                    delete={Api.deleteBook}
                  />
                );
              })
            : "no books"}
        </div>
      </div>
    </>
  );
}
//set state with data .then
export default Books;
