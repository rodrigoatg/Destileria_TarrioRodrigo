import React, {useContext} from 'react'
import { BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { MyContext } from '../context/CartContext';

export default function Cart() {
    const {carrito} = useContext(MyContext);
    const {removeItem} = useContext(MyContext);

    let contenido = "";
    console.log(carrito);
    console.log("ini Cart");
    console.log(`carrito length ${carrito.length}`);
    if (carrito.length > 0){
        console.log("ini Cart")
        //muestro carrito
        carrito.forEach(element => {
            contenido = contenido +
            <>
                {element[1]} {'x ('} {element[3]} {") Precio Unitario: "} {element[2]}
                <button onClick={() => removeItem(element[0])}>Eliminar</button>
                <br />
            </>
        });
        console.log(`contenido: ${contenido}`)
    }else{
        contenido = <>
            <h2>El crrito se encuentra vacío </h2> 
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
