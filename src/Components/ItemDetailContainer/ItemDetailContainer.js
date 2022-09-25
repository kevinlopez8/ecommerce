import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../Mock/Mock'
import { useParams } from "react-router-dom"
import '../ItemDetailContainer/ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([])
  const {detalleId} = useParams()

  const getProductos = (id)=>{
    return new Promise((resolve, reject)=>{
      const producto = productos.find(productos=>productos.id === parseInt(id))
      resolve(producto)
    })
  }

  useEffect(()=>{
    const getItem = async()=>{
      const item = await getProductos(detalleId)
      console.log('producto', item)
      setProducto(item)
    }
    getItem()
  }, [detalleId])

  return (
    <div className="detail-container">
      <p>Item Detail Container</p>
        <ItemDetail producto = {producto} />
    </div>


    )
}
export default ItemDetailContainer