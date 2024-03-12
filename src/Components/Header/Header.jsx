import './Header.css'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <>
        <Navbar className='Navbar'>
        <div className="header-container">
        <div className="header-overlay">
        <h1>Food App</h1>
        </div>
        <img src='Header.jpg' alt='header' className='header-img'/>
        </div>
        </Navbar>
        <div className="navigation-links">
            {/* Visa "Logga Ut" om användaren är inloggad, annars visa "Logga In" */}
            {isLoggedIn ? (
                <button className="logout-button" onClick={onLogout}>Logout</button>
            ) : (
                <Link to="/login" className="login-link">Login</Link>
            )}
            <Link to="/" className="home-link">Home</Link>
        </div>
    </>
  )
}

export default Header;
