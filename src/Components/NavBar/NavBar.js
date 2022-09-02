import './NavBar.css'
import logo from '../../Images/logo.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const NavBar  = () => {
  return (
      <nav>
    <div className="nav-wrapper">
      <img src={logo} className='logo'></img>
      <div className='buttons-wrapper'>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#">Home</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href='#' >Contacto</a></li>
          </ul>
          <ShoppingCartOutlinedIcon />
      </div>
    </div>
  </nav>
  )
}

export default NavBar