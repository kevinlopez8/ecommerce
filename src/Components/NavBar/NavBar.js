import './NavBar.css'
import logo from '../../Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar  = () => {
  return (
      <nav>
    <div className="nav-wrapper">
      <img src={logo} className='logo'></img>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Home</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href='#' >Contacto</a></li>
      </ul>
      <FontAwesomeIcon icon="fa-regular fa-cart-shopping" />
    </div>
  </nav>
  )
}

export default NavBar