import './NavBar.css'
import logo from '../../Images/logo.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link, NavLink} from 'react-router-dom'

const NavBar  = () => {
  return (
      <nav>
    <div className="nav-wrapper">
      <img src={logo} className='logo'></img>
      <div className='buttons-wrapper'>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='/'>Inicio</NavLink></li>
            <li><NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='/nostros'>Nosotros</NavLink></li>
            <li><NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='productos'>Productos</NavLink></li>
            <li><NavLink className={({isActive})=>isActive ? 'claseActive' : 'claseInactive'} to='/contacto'>Contacto</NavLink></li>
          </ul>
          <ShoppingCartOutlinedIcon />
      </div>
    </div>
  </nav>
  )
}

export default NavBar