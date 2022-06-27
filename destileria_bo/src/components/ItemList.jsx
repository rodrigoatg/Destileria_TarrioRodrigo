import React, { useState, useEffect } from 'react'
import Item from './Item'

export default function ItemList() {
    //agrupa items.jsx -> incluir este dentro de itmlistcontainer
    //implementa async mock(promesa hecha por mi) que devuelve un conjunto de item (id, title, description, price, pictureUrl) en 2 seg
    //function  ItemList({Item}) -> recibe props Items varios [] y los mapea al componente Item

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);
  
  useEffect(() => {
    const cargandoItems = new Promise((res, rej) => {
        setTimeout( () =>{
          res([
            { id: '1' , title: 'item1', description: 'este es el item 1', category: 'cat1', price: '10', pictureUrl: '/logo192.png' },
            { id: '2' , title: 'item2', description: 'este es el item 2', category: 'cat2', price: '20', pictureUrl: '/logo192.png' },
          ]);
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
    <div>{error && 'Ocurrio un error cargando los items.'}</div>
    <div>{resultado &&
    //filtro los resultados segun categoria
    <>
      <div className='container'>
        <ul className='d-flex flex-row list-unstyled'>
          {resultado.map((item) => (
              
                <li className='px-5 mx-2' key={item.id}>
                  <Item id = {item.id} title ={item.title} description = {item.description} price = {item.price} pictureUrl = {item.pictureUrl} />
                </li>
              
            )
          )}
        </ul>
      </div>  
    </>
    }</div>
  </>
  )
}
