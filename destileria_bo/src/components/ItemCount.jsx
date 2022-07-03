import React, { useState } from 'react'

export default function ItemCount(props) {
  
    const [cantidadCarrito, setCantidadCarrito] = useState(0)
    const [cantidadItems, setCantidadItems] = useState(parseInt(props.initial))
    
    //change del textbox
    const handleInputChange = (event) => {
        setCantidadItems(parseInt(event.target.value));
        // if(parseInt(event.target.value) <= props.stock){
        //     setCantidadItems(parseInt(event.target.value));
        // }
        
    }

    //Boton agregar
    const handleBtn = () => {
        props.setCantidadItem(parseInt(cantidadCarrito)); 
        props.setStockLocal(parseInt(props.stock) - parseInt(cantidadCarrito));
        props.onAdd();
    }

    //funcion que suma o resta
    const btnChange = (add) =>{
        if(add){
            setCantidadCarrito(cantidadCarrito + calcStock(add, props.stock, cantidadCarrito ,cantidadItems));
        }else{
            setCantidadCarrito(cantidadCarrito - calcStock(add, props.stock, cantidadCarrito ,cantidadItems));
        }
    }
    
    return (
        <>
            <div>
                <button title='remover' onClick ={() => btnChange(false)}>
                        -
                </button>  

                <input
                    placeholder = "Ingrese cantidad"
                    type = "text"
                    name = "cantidadItems"
                    value={cantidadItems}
                    onChange ={handleInputChange}
                ></input>
                <button title='agregar' onClick ={() => btnChange(true)}>
                    +
                </button>  
                <br /><br />
                <button className='btn btn-outline-dark' title='finAgregar' onClick ={() => handleBtn()}>
                    Agregar al Carrito {cantidadCarrito} items
                </button>

                {/* esto de abajo es para probar
                <br></br>
                <hr />
                <p>stock: </p>{props.stock}
                <br></br>
                <hr />
                <p>cantidad textbox: </p>{cantidadItems}
                <hr></hr>
                <p>cantidad carrito: </p>{cantidadCarrito} */}
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

