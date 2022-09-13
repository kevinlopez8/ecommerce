import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ( {Prod} ) => {
  return (
    <div className="list-style">
    {Prod.map((prod) => <Item key = {prod.id} prod = {prod} /> )}
    </div>
    )
}

export default ItemList