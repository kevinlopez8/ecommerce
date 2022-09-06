import Counter from '../Counter/Counter'
import './Item.css'

const Item = ({prod}) => {
  return (
    <div className='card'>
      <div className='title'>
        <h2 className='nombreProd'>{prod.nombre}</h2>
      </div>
        <p className='descProd'>{prod.descritption}</p>
        <p className='precioProd'>${prod.precio}</p>
        <Counter numero={0} stock={prod.stock} />
    </div>
  )
}

export default Item