import { useState } from "react";
import axios from 'axios';
import styles from '../styles/AddBookForm.module.css';

const BOOK_CATEGORIES = [
  "Fiction",
  "Non-Fiction",
  "Fantasy",
  "Science Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Horror",
  "Biography",
  "History",
  "Self-Help",
  "Science",
  "Travel",
  "Poetry",
  "Drama",
  "Young Adult",
  "Children",
  "Cooking",
  "Art",
  "Business"
];

export default function AddBookForm({ addBook }) {
  const [formData, setFormData] = useState({ 
    title: '', 
    author: '', 
    category: 'Fiction',
    cover: '' 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://687e938defe65e5200870f76.mockapi.io/books', formData);
      addBook(response.data);
      setFormData({ 
        title: '', 
        author: '', 
        category: 'Fiction',
        cover: '' 
      });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add New Book</h2>
      
      <div className={styles.inputGroup}>
        <label htmlFor="title">Book Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter book title"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          className={styles.input}
          required
        />
      </div>
      
      <div className={styles.inputGroup}>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          placeholder="Enter author name"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          className={styles.input}
          required
        />
      </div>
      
      <div className={styles.inputGroup}>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className={styles.select}
        >
          {BOOK_CATEGORIES.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      
      <div className={styles.inputGroup}>
        <label htmlFor="cover">Cover Image URL (optional)</label>
        <input
          id="cover"
          type="url"
          placeholder="https://example.com/book-cover.jpg"
          value={formData.cover}
          onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
          className={styles.input}
        />
      </div>

      <button className={styles.button} type="submit">Add to Collection</button>
    </form>
  );
}