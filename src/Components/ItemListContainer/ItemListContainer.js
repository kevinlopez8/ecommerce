import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import getFetch from '../Mock/Mock'  
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

  const [Productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)


useEffect(()=>{
  getFetch
  .then((respuesta)=> setProductos(respuesta))
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))
}, [])


  return (
    
    <div>
      {
        loading
        ?
        <div className='contenedor-carga'>
          <div className='cargando'></div>
        </div>
        :
        <div className='item-list-container'>
          <h1 className='titulo'>CATALOGO DE PRODUCTOS</h1>
          <div className='lista'>
          <ItemList Prod = {Productos} />
          <p></p>
          </div>
        </div>
      }
    </div>
  
  )
}

export default ItemListContainer
