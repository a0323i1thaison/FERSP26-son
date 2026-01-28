import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Pizza House</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>
    </header>
  );
}