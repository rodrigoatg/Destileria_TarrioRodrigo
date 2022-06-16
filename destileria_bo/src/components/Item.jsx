import React from 'react'
import { Link } from 'react-router-dom'

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
          <button className='btn btn-outline-dark'>
            <Link className='text-decoration-none' to={'/producto/' + props.id}>
            Ver detalle del Producto
            </Link>
          </button>
          <br />
          <hr />
      </div>
    </>
  )
}
