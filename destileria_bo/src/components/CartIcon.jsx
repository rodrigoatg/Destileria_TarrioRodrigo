import React from 'react'
import {BsFillCartFill} from 'react-icons/bs';
import {useContext, useEffect, useState} from 'react';
import {MyContext} from '../context/CartContext';

export default function CartIcon() {
    const {carrito} = useContext(MyContext);

    const [cantidad, setCantidad] = useState(); 

    useEffect(() => {
      if(carrito.length > 0){
        setCantidad(carrito.length)
      }else{
        setCantidad("")
      }
    },[]);
    
  return (
    <div>
        <BsFillCartFill size="1.7rem"/>
        {cantidad}
    </div>
  )
}
