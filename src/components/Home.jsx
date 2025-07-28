import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>

      <div className={`${styles.homepage} ${loaded ? styles.loaded : ''}`}>
        <section className={styles.hero}>
          <div className={styles.heroBackground}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <span className={styles.titleGradient}>Book Haven</span>
            </h1>
            <p className={styles.subtitle}>Discover, organize, and cherish your literary journey</p>
            <div className={styles.ctaContainer}>
                <Link className={styles.primaryButton} to="/books"><i className="fas fa-book-open"></i> Explore Collection</Link>
              
                <Link className={styles.secondaryButton} to="/add-book"><i className="fas fa-plus"></i> Add New Book </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}