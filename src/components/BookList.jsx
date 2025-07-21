import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import SearchBar from './SearchBar';
import styles from '../styles/BookList.module.css';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://687e938defe65e5200870f76.mockapi.io/books')
      .then(res => {
        setBooks(res.data);
        setFilteredBooks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleSearch = (term) => {
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(term.toLowerCase()) || 
      book.author.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleFilter = (category) => {
    if (category === 'all') {
      setFilteredBooks(books);
    } else {
      const filtered = books.filter(book => book.category === category);
      setFilteredBooks(filtered);
    }
  };

  if (loading) return <div className={styles.loading}>Loading...</div>;

  return (
  <div className={styles.listContainer}>
    <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
    {filteredBooks.length === 0 ? (
      <div className={styles.noResults}>No books found matching your criteria</div>
    ) : (
      filteredBooks.map(book => (
        <BookCard key={book.id} book={book} />
      ))
    )}
  </div>
);
}