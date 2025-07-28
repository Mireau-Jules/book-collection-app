import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>

      <div className={`${styles.homepage} ${loaded ? styles.loaded : ''}`}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <span className={styles.titleGradient}>Book Haven</span>
            </h1>
            <p className={styles.subtitle}>Discover, organize, and cherish your literary journey</p>
            <div className={styles.ctaContainer}>
              <a href="/books" className={styles.primaryButton}>
                <i className="fas fa-book-open"></i> Explore Collection
              </a>
              <a href="/add-book" className={styles.secondaryButton}>
                <i className="fas fa-plus"></i> Add New Book
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}