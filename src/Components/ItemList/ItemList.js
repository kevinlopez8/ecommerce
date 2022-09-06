import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ( {Prod} ) => {
  return (
      Prod.map((prod)=>{
      <Item Key = {prod.id} prod = {prod} /> 
    })
    )
}

export default ItemList