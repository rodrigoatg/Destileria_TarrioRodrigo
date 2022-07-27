import {useContext, useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { MyContext } from '../context/CartContext';

export default function Cart() {
    const {carrito, removeItem} = useContext(MyContext);

    const [contenido, setContenido] = useState([]);
    
    let content = ""

    useEffect(() => {

        content = ""
        
        if (carrito.length > 0){
            //muestro carrito
            carrito.map((element) => {
                content = [...content,
                    <>
                    <div key={element.id}>
                        {element.nombre} {'x ('} {element.cantidad} {") Precio Unitario: "} {element.precio}
                        <button onClick={() => EliminarItem(element.id)}>Eliminar</button>
                        <br />
                    </div>
                    </>];
            });
            
        }else{
            content = 
            <>
                <h2>El carrito se encuentra vacío </h2> 
                <h3>
                    <Link className='text-decoration-none btn btn-outline-dark' to={'/tienda/'}>
                        Comience a comprar
                    </Link>
                </h3>
            </>
        }
        setContenido(content);
    }, []);

    function EliminarItem(id){
        removeItem(id)
        //recargo el contenido
        content = ""
        if (carrito.length > 0){
            //muestro carrito
            carrito.map((element) => {
                content = [...content,
                    <>
                        {element.nombre} {'x ('} {element.cantidad} {") Precio Unitario: "} {element.precio}
                        <button onClick={() => removeItem(element.id)}>Eliminar</button>
                        <br />
                    </>];
            });
            
        }else{
            content = 
            <>
                <h2>El carrito se encuentra vacío </h2> 
                <h3>
                    <Link className='text-decoration-none btn btn-outline-dark' to={'/tienda/'}>
                        Comience a comprar
                    </Link>
                </h3>
            </>
        }
        setContenido(content);
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

