import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <section className={styles.heroNew}>
        <div className={styles.geometricShape}></div>
        <div className={styles.heroContentNew}>
          <h1><span>Book Haven</span></h1>
          <p>Discover, organize, and cherish your literary journey</p>
          <div className={styles.ctaButtonsNew}>
            <a href="/books" className={`${styles.btn} ${styles.newPrimary}`}>
              <i className="fas fa-book-open"></i> Explore Collection
            </a>
            <a href="/add-book" className={`${styles.btn} ${styles.newSecondary}`}>
              <i className="fas fa-plus"></i> Add New Book
            </a>
          </div>
        </div>
      </section>
      
      <div className={styles.featuresGrid}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <i className="fas fa-search"></i>
          </div>
          <h3>Smart Discovery</h3>
          <p>Find books with powerful search and filtering tools</p>
        </div>
        
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <i className="fas fa-layer-group"></i>
          </div>
          <h3>Organize Easily</h3>
          <p>Categorize your collection with custom tags</p>
        </div>
        
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <i className="fas fa-bookmark"></i>
          </div>
          <h3>Personal Library</h3>
          <p>Create your own digital bookshelf</p>
        </div>
      </div>
    </div>
  );
}