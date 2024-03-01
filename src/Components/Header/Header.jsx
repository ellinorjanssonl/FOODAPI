import './Header.css'
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
        <Navbar className='Navbar'>
        <div className="header-container">
        <h1 className="header">Maträtter</h1>
        </div>
        </Navbar>
    </>

  )
}

export default Header
