import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import bookFacade from './bookFacade';
import { 
    RouterProvider, 
    createBrowserRouter,
    createRoutesFromElements,
    Route, } from 'react-router-dom'
import BookList from './bookList';
import AddBook from './addBook';
import FindBook from './FindBook';
import FindBookById from './findBookById';

    

    const router = createBrowserRouter(createRoutesFromElements(<>
      <Route path="/" element={<App bookFacade={bookFacade}/>} >
        <Route path="/booklist" element={<BookList bookFacade={bookFacade} />} />  
        <Route path="/addbook" element={<AddBook addBook={bookFacade.addBook}/>} />
          <Route path="/findbook" element={<FindBook />} >
            <Route path=":id" element={<FindBookById bookFacade={bookFacade}/>} />
          </Route>  
      </Route>
    </>)
    );
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
    )