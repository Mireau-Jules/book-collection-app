import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import SearchBar from './SearchBar';
import styles from '../styles/BookList.module.css';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://687e938defe65e5200870f76.mockapi.io/books');
        setBooks(response.data);
        setFilteredBooks(response.data);
      } catch (err) {
        console.error('Failed to fetch books:', err);
        setError('Failed to load books. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (term) => {
    const filtered = books.filter(book => 
      book.title.toLowerCase().includes(term.toLowerCase()) || 
      book.author.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  const handleFilter = (category) => {
    setFilteredBooks(
      category === 'all' 
        ? books 
        : books.filter(book => book.category === category)
    );
  };

  if (loading) return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p>Loading your books...</p>
    </div>
  );

  if (error) return (
    <div className={styles.errorContainer}>
      <i className={`fas fa-exclamation-triangle ${styles.errorIcon}`}></i>
      <p>{error}</p>
      <button 
        onClick={() => window.location.reload()} 
        className={styles.retryButton}
      >
        <i className="fas fa-sync-alt"></i> Retry
      </button>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
      </div>
      
      {filteredBooks.length === 0 ? (
        <div className={styles.noResults}>
          <i className={`fas fa-book-open ${styles.noResultsIcon}`}></i>
          <h3>No books found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}