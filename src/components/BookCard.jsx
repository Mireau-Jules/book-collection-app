import styles from '../styles/BookCard.module.css';

export default function BookCard({ book }) {
  return (
    <div className={styles.card}>
      <img 
        src={book.cover || 'https://via.placeholder.com/150x200?text=No+Cover'} 
        alt={`${book.title} cover`}
        className={styles.cover}
      />
      <div className={styles.details}>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>By: {book.author}</p>
        <span className={styles.category}>{book.category}</span>
      </div>
    </div>
  );
}