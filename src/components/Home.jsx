import '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Your Book Collection!</h1>
      <p className="subtitle">Organize your favorite reads in one place</p>
      <div className="cta-buttons">
        <a href="/books" className="btn primary">Browse Books</a>
        <a href="/add-book" className="btn secondary">Add New Book</a>
      </div>
    </div>
  );
}