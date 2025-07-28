import styles from '../styles/BookCard.module.css';

export default function BookCard({ book }) {
  const getFallbackCover = (title) => {
    const text = title ? title.substring(0, 20) : 'No Cover';
    return `https://via.placeholder.com/150x200.png?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className={styles.card}>
      <img 
        src={book.cover || getFallbackCover(book.title)} 
        alt={`${book.title} cover`}
        className={styles.cover}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = getFallbackCover(book.title);
        }}
      />
      <div className={styles.details}>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>By: {book.author}</p>
        <span className={styles.category}>{book.category}</span>
        {book.pdfLink && (
          <a
            href={book.pdfLink}
            target='_blank'
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
              Download PDF
          </a>
        )}
      </div>
    </div>
  );
}