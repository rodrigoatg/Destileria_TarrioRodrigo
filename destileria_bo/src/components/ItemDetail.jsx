import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import {useState} from 'react';
import { MyContext } from '../context/CartContext';

export default function ItemDetail({id, title, pictureUrl, description, price, stock}) {
  const [stockLocal, setStockLocal] = useState(stock);
  const [cantidadItem, setCantidadItem] = useState(10);
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  const {addItem} = useContext(MyContext);

  let item = {id: id, nombre: title, imagen: pictureUrl, descripcion: description, precio:price, stock: stock};

  function onAdd(){
    addItem(item, cantidadItem);
    // setCantidadItem(cantidadItem + cantidad);
    // setStockLocal(stockLocal - cantidadItem );
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
        <br />
          {mostrarItemCount ? <ItemCount stock={stockLocal} initial= {cantidadItem} stockLocal={stockLocal} setStockLocal={setStockLocal} cantidadItem={cantidadItem} setCantidadItem={setCantidadItem} onAdd={onAdd} /> :  <button className='text-decoration-none btn btn-outline-dark' onClick={ () => setMostrarItemCount(true)}> Finalizar Compra </button>}
        <hr />
    </div>
  </>
  )
}