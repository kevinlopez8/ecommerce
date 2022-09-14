import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import getFetch from '../Mock/Mock'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

//llamada a la api
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const {detalleId} = useParams()

  useEffect(()=>{
    getFetch
    .then(respuesta => setProducto(prod => prod.id === detalleId))
    .finally(()=> setLoading(false))
  }, [])
  console.log(producto)

  return (
    <div className="detail-container">
      {
        loading ? <h2 className="loading">Cargando ...</h2>
        :
        <ItemDetail producto = {producto} />
      }
    </div>


    )
}
export default ItemDetailContainer