import React, {useState, useEffect, useContext} from 'react'
import { MyContext } from '../context/CartContext';
import { BsFillCartFill } from "react-icons/bs";
// import { FaShoppingCart } from "react-icons/fa";


export const CartWidget = (props) => {
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
      <>
        <div>
            {/* <FaShoppingCart size="1.5rem"/> */}
            <BsFillCartFill size="1.7rem"/>
            
        </div>
      </>
    )
  }
  