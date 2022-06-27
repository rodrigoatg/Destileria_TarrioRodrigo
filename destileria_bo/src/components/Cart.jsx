import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/CartContext';

export default function Cart() {
    const {carrito} = useContext(MyContext);

    let contenido = "";

    if (carrito.length > 0){
        //muestro carrito
        carrito.forEach(element => {
            contenido = <>
                {element[1]} {'x ('} {element[3]} {") Precio Unitario: "} {element[2]}
                <br />
            </>
        });
    }else{
        contenido = <>
            <h2>El carrito se encuentra vacío </h2> 
            <h3>
                <Link className='text-decoration-none btn btn-outline-dark' to={'/tienda/'}>
                    Comience a comprar
                </Link>
            </h3>
        </>
    }

    return (
        <>
            <div>
                Carrito
                <br />
                <hr />
                <br /> <br />
                {contenido}
            </div>
        </>
    )
}
