import Counter from '../Counter/Counter'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
  return (
    <div className='prod-conntainer'>
      <div className='card'>
        <div>
          <img src={prod.img} className='imgProd' />
        </div>
        <div className='card-detalle'>
        <h2 className='nombreProd'>{prod.nombre}</h2>
        <p className='precioProd'>${prod.precio}</p> 
        <Link to={`/prod/${prod.id}`}>
          <button className='ver-mas'>Ver Mas</button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Item

//<Counter numero={0} stock={prod.stock} /> <--------------RECORDAR PONER ESTO EN EL DETAIL CONTAINER--------------------------------------------|