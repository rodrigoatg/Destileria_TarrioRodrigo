import React from 'react'

export default function ItemDetail({title, pictureUrl, description, price}) {
  
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
        <hr />
    </div>
  </>
  )
}
