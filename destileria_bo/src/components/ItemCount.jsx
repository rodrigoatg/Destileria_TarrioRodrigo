import React, { useState } from 'react'

export default function ItemCount(props) {
  
    const [cantidadCarrito, setCantidadCarrito] = useState(0)
    const [cantidadItems, setCantidadItems] = useState(parseInt(props.initial))
    
    //change del textbox
    const handleInputChange = (event) => {
        if(parseInt(event.target.value) <= props.stock){
            setCantidadItems(parseInt(event.target.value))
        }
    }

    return (
        <>
            <div>
                <button title='remover' onClick ={() => setCantidadCarrito(cantidadCarrito - calcStock(false, props.stock, cantidadCarrito ,cantidadItems))}>
                        -
                </button>  

                <input
                    placeholder = "Ingrese cantidad"
                    type = "number"
                    name = "cantidadItems"
                    value={cantidadItems}
                    onChange ={handleInputChange}
                ></input>
                <button title='agregar' onClick ={() => setCantidadCarrito(cantidadCarrito + calcStock(true, props.stock, cantidadCarrito ,cantidadItems))}>
                    +
                </button>  
                
                {/* esto de abajo es para probar */}
                <br></br>
                <hr />
                <p>stock: </p>{props.stock}
                <br></br>
                <hr />
                <p>cantidad textbox: </p>{cantidadItems}
                <hr></hr>
                <p>cantidad carrito: </p>{cantidadCarrito}
            </div>
        </>
  )
}


const calcStock = (add, stock, cantidadCarrito, cantidadItems ) => {
// si quiero remover menos que 0 items lo dejo en cero
// si quiero agregar mas que el stock no hago nada (devuelvo 0)
    if(add){
        //agrego al carrito
        if (stock - cantidadCarrito - cantidadItems < 0){
            return 0
        }else{
            return cantidadItems
        }
    }else{
        //remuevo del carrito
        if (cantidadCarrito - cantidadItems < 0){
            return 0
        }else{
            return cantidadItems
        }
    }

}