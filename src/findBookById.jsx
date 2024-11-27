import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FindBookById = ({bookFacade}) => {
   const { id } = useParams();
    const [book, setBook] = useState ({title: "", info: ""});

    useEffect(() => {
        const book = bookFacade.findBook(id);
        setBook(book);
    }, []);
   
    return (
        <>
        <h3>book id: {id}</h3>
        <p>title: {book.title}</p>
        <p>info: {book.info}</p>
        </>
        
    );
    };

    export default FindBookById;