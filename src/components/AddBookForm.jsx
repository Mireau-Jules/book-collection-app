import { useState } from "react";
import axios from 'axios';
import styles from '../styles/AddBookForm.module.css';

// Complete list of book categories
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
    category: 'Fiction', // Default category
    cover: '' 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/books', formData);
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
      <input
        type="text"
        placeholder="Book Title"
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        className={styles.input}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        className={styles.input}
        required
      />
      
      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className={styles.select}
      >
        {BOOK_CATEGORIES.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <input
        type="url"
        placeholder="Cover Image URL (optional)"
        value={formData.cover}
        onChange={(e) => setFormData({ ...formData, cover: e.target.value })}
        className={styles.input}
      />

      <button className={styles.button} type="submit">Add Book</button>
    </form>
  );
}