import Counter from '../Counter/Counter'
import './Item.css'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const Item = ({prod}) => {
  return (
    <div className='prod-conntainer'>
      <div className='card'>
        <img src={prod.img} className='imgProd' />
        <h2 className='nombreProd'>{prod.nombre}</h2>
        <p className='descProd'>{prod.descritption}</p>
        <p className='precioProd'>${prod.precio}</p>
        <Counter numero={0} stock={prod.stock} />
        <p className='detalle' onClick={ItemDetailContainer}>Ver Detalle</p>
      </div>
    </div>
  )
}

export default Item