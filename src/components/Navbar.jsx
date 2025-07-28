import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.navContainer}>
                <div><Link to="/" className={styles.logo}>
                    <i className="fas fa-book"></i>
                    <span>Book Haven</span>
                </Link></div>
                <div className={styles.links}>
                    <Link to="/">Home</Link>
                    <Link to="/books">Books</Link>
                    <Link to="/add-book">Add Book</Link>
                </div>
            </div>
        </nav>
    );
}