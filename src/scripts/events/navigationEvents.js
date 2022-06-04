import { favAuthors, getAuthors } from '../../api/authorData';
import { booksOnSale, getBooks } from '../../api/bookData';
import { emptyBooks, showBooks } from '../components/pages/books';
import signOut from '../helpers/auth/signOut';
import { showAuthors, emptyAuthors } from '../components/pages/authors';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale(uid).then((saleBooksArray) => {
      if (saleBooksArray.length !== 0) {
        showBooks(saleBooksArray);
      } else {
        emptyBooks(saleBooksArray);
      }
    });
  });

  // ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(uid).then((booksArray) => {
      if (booksArray.length !== 0) {
        showBooks(booksArray);
      } else {
        emptyBooks(booksArray);
      }
    });
  });

  // STUDENTS Create an event listener for the Authors
  // 1. When a user clicks the authors link, make a call to firebase to get all authors
  // 2. Convert the response to an array because that is what the makeAuthors function is expecting
  // 3. If the array is empty because there are no authors, make sure to use the emptyAuthor function
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(uid).then((authorsArray) => {
      if (authorsArray.length !== 0) {
        showAuthors(authorsArray);
      } else {
        emptyAuthors(authorsArray);
      }
    });
  });

  // FAVORITE AUTHORS
  document.querySelector('#favorite-authors').addEventListener('click', () => {
    favAuthors(uid).then((favAuthorsArray) => {
      if (favAuthorsArray.length !== 0) {
        showAuthors(favAuthorsArray);
      } else {
        emptyAuthors(favAuthorsArray);
      }
    });
  });

  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
