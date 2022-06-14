import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]);
  
    useEffect(() => {
      const cargandoItems = new Promise((res, rej) => {
          setTimeout( () =>{
            res(
              { id: 'UnicSarasa' , title: 'Item Detallado', description: 'este es el item en su forma detalle', price: '100', pictureUrl: '/logo192.png' },
            );
          }, 2000);
      })
    
  
      cargandoItems
        .then((resultado) => {
          //si cargo los items
          setResultado(resultado);
        }) 
        .catch((error) => {
          //si da error
          setError(true);
          setResultado(false);
          console.log(`Ocurrio un error cargando los items. ${error}` );
        })
        .finally(() => {
          //lo hace siempre
          setLoading(false);
        })
    }, []);

    return (
    <>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Ocurrio un error cargando el detalle del item.'}</div>
        <div>{resultado &&
            <>
                <div>
                    <ItemDetail {...resultado} />
                </div>  
            </>
        }</div>
    </>
  )
}
