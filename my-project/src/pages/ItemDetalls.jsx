import React from 'react'
import { useParams } from 'react-router-dom'


function ItemDetalls({ productos }) {
    const { Id } = useParams();
    const product = productos.find((x) => String(x.id) === String(Id));
  
    // Verifica si encontró el producto o no
    if (!product) {
      return <div>Producto no encontrado</div>;
    }
  return (
    <div className='item-details-container'>
      <img src={product.image} alt={product.name} className="item-details-image" />
      <h1>Detalle, { Id }</h1>
      <h1 className="item-details-title">{product.name}</h1>
      <p className="item-details-description">{product.description}</p>
    </div>
  )
}

export default ItemDetalls
