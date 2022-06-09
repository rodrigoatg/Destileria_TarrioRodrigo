import React from 'react'

export default function Item(props) {
    //muestra informacion breve del producto, tiene un onclick para ver detalles
    //aca tenemos que tener la vista del item (id , title, description, price, pictureUrl)
    //function Itemk(Item)
    
  return (
    <>
      <div >
          <h4>{props.title}</h4>
          <hr />
          <br />
          <img src={props.pictureUrl} alt="itemimg" width={100} />
          <br />
          <p>{props.description}</p>
          <br />
          <button>Ver detalle del Producto</button>
          <br />
          <hr />
      </div>
    </>
  )
}
