import React from "react";
import { useState } from "react";


const AddBook = ({addBook}) => {
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const book = Object.fromEntries(formData);
        console.log(book);
        addBook(book);
        
    };

    return (
        <div>
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder=" add Title" />
            <input name="info" type="text" placeholder=" add Info" />
            <button type="submit">Save</button>
        </form>
        </div>
    );
    }

    export default AddBook;