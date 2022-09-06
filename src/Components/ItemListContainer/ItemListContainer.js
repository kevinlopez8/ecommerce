import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import getFetch from '../Mock/Mock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
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
        <h1 className='cargando'>CARGANDO...</h1>
        :
        <div>
          <h1 className='titulo'>CATALOGO DE PRODUCTOS</h1>
          <div className='lista'>
          <ItemList Prod = {productos} />
          </div>
        </div>
      }
    </div>
  )
}

export default ItemListContainer
