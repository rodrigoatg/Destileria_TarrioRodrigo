import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]);

    const id = useParams().id;
    const coleccion = 'items';
    const db = getFirestore();

    const docItem = doc(db, coleccion, id)

    useEffect(() => {
        const cargandoItems = new Promise((res, rej) => {
            getDoc(docItem).then((resfb) => {
              res(resfb.data());
            })
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
