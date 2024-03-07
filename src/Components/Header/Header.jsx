import './Header.css'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <>
        <Navbar className='Navbar'>
        <div className="header-container">
        <div className="header-overlay">
        <h1>Maträtter</h1>
        </div>
        <img src='Header.jpg' alt='header' className='header-img'/>
        </div>
        </Navbar>
        <div className="navigation-links">
            {/* Visa "Logga Ut" om användaren är inloggad, annars visa "Logga In" */}
            {isLoggedIn ? (
                <button className="logout-button" onClick={onLogout}>Logga Ut</button>
            ) : (
                <Link to="/login" className="login-link">Logga In</Link>
            )}
            <Link to="/" className="home-link">Hem</Link>
        </div>
    </>
  )
}

export default Header;
