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
          {/* <button className='btn btn-outline-dark' onClick={() => {<Link className='text-decoration-none' to={'/item/' + props.id}></Link>}}>
            Ver detalle del Producto
          </button> */}
          <Link className='text-decoration-none btn btn-outline-dark' to={`/item/${props.id}`}>
            Ver detalle del Producto
          </Link>
          <br />
          <hr />
      </div>
    </>
  )
}
