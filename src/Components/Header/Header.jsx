import './Header.css'
import { Navbar } from 'react-bootstrap';


const Header = () => {
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
    </>

  )
}

export default Header
