import React from "react";

const BookList = ({ bookFacade }) => {
  const books = bookFacade.getBooks();
  return (
    <div>
      <h2>All books</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.info}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
} 

export default BookList;