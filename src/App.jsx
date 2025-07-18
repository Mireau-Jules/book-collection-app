import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';

function App() {
 const [books, setBooks] = useState([]);

 const addBook = (newBook) => {
  setBooks([...books, newBook]);
 };

 return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/books" element={<BookList books={books} />} />
      <Route path='/add-book' element={<AddBookForm addBook={addBook} />} />
    </Routes>
  </BrowserRouter>
 )
}

export default App
