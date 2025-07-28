import { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

export default function SearchBar({ onSearch, onFilter }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const BOOK_CATEGORIES = [
  "All Categories",
  "Languages & Communication",
  "Personal Development",
  "Law, Politics & Philosophy",
  "Economics, Finance & Entrepreneurship",
  "History, Essays & Fiction",
  "Engineering, Math & Computer Science",
  "Handicrafts & DIY",
  "Psychology, Sociology & Education",
  "Health & Medicine",
  "Relationships & Sexuality",
  "Spirituality, Art & Music"
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilter(value === "All Categories" ? "all" : value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      <select 
        value={filter} 
        onChange={handleFilter}
        className={styles.filterSelect}
      >
        {BOOK_CATEGORIES.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}