import React, { createContext, useState } from 'react'

export const MyContext = createContext([]);

export default function CartContext({children}) {
    
  const [carrito, setCarrito] = useState([]);
  //supongo un objeto que es [id, nombre, precio, quantity]


  function addItem(item, quantity){
    //agegar cierta cant de un item al carrito
    let found = false;
    
    for (let i=0; i < carrito.length; i++)
    {
      if(carrito[i][0] === item.id){
        found = true;
        carrito[i][3] += parseInt(quantity);
      }
    }
    
    if (!found){
      setCarrito([...carrito, {...item, qty: quantity}]);
    }
  };

  function removeItem(itemId){
    //Remover un item del cart segun su id
    setCarrito(carrito.filter((producto) => producto.id !== itemId));
  };

  function clear(){
  //Remover todos los items
    setCarrito([]);
  };

  const isInCart = (id) => {

    const found = carrito.find(producto => producto.id === id);

    return found === undefined ? false : true ;
  }


  return (
    <>
      <MyContext.Provider value={{carrito, setCarrito, addItem, removeItem, clear, isInCart}} >
        {children}
        
      </MyContext.Provider>
    </>
  )
}