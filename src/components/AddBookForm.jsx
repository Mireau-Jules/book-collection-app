import { useState } from "react";
import axios from 'axios';
import styles from '../styles/AddBookForm.module.css';

const BOOK_CATEGORIES = [
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

export default function AddBookForm({ addBook }) {
  const [notification, setNotification] = useState(null); 

  const [formData, setFormData] = useState({ 
    title: '', 
    author: '', 
    category: 'Fiction',
    cover: '',
    pdfLink: ''  // New field for download link
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
        cover: '',
        pdfLink: ''  // Reset after submit
      });
    setNotification({ type: 'success', message: 'Book added!' });
    } catch (error) {
      setNotification({ type: 'error', message: 'Failed to add book' });
      console.error('Error adding book:', error);
    } finally {
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add New Book</h2>
      {notification && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}
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

      <div className={styles.inputGroup}>
        <label htmlFor="pdfLink">PDF Download Link (optional)</label>
        <input
          id="pdfLink"
          type="url"
          placeholder="https://drive.google.com/file/d/.../view"
          value={formData.pdfLink}
          onChange={(e) => setFormData({ ...formData, pdfLink: e.target.value })}
          className={styles.input}
          required
          title="Must be a valid http/https URL"
        />
        <small className={styles.helpText}>
          Use Google Drive shareable links (set to "Anyone with the link can view")
        </small>
      </div>

      <button className={styles.button} type="submit">Add to Collection</button>
    </form>
  );
}