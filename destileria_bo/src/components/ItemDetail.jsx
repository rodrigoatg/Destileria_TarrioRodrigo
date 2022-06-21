import React from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react';

export default function ItemDetail({title, pictureUrl, description, price, stock}) {
  const [stockLocal, setStockLocal] = useState(stock);
  const [cantidadItem, setCantidadItem] = useState(10);
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  function onAdd(cantidad){
    setCantidadItem(cantidadItem + cantidad);
    setStockLocal(stockLocal - cantidadItem );
    setMostrarItemCount(false);
  }

  return (
      //Desarrolla la vista de detalle expandida del producto con su imagen, titulo, descripcion y precio
    <>
    
    <div >
        <h4>{title}</h4>
        <hr />
        <br />
        <img src={pictureUrl} alt="itemimg" width={100} />
        <br /> <br />
        <p>{description}</p>
        <br />
        <p>$ {price}</p>
        <br />
        <p>Cantidad: {cantidadItem}</p>
        <br />
        <p>Stock: {stockLocal}</p>
        <br />
        <br />
        {mostrarItemCount ? <ItemCount stock={stockLocal} initial= {cantidadItem} onAdd={onAdd} /> :  <button className='text-decoration-none btn btn-outline-dark' onClick={ () => setMostrarItemCount(true)}> Finalizar Compra </button>}
        <hr />
    </div>
  </>
  )
}
