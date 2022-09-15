import React from 'react'
import '../ItemDetail/ItemDetail.css'


const ItemDetail = ({prod}) => {
  return (
    <div className='detail-container'>
      <img src={prod.img} className='prod-img' />
      <h2 className='prod-nombre'>{prod.nombre}</h2>
      <p className='prod-detalle'>{prod.detalle}</p>
      <p className='prod-precio'>{prod.precio}</p>
    </div>
  )
}

export default ItemDetail