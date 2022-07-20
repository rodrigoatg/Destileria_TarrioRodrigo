import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewItemList from './NewItemList';


//cambio a hacer: aca cargo todos los items, le paso la totalidad a itemList -> ItemList deberia filtrar+
// ItemListContainer trae de la base de datos todos los items que cumplen con el filtro de los parametros de la URL.
// Luego le pasa esta lista de items a ItemList que dibuja los items 
export default function NewItemListContainer() {
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState([]);

    const filtro = (useParams().categoria||"vacio");
    // console.log(filtro);
    useEffect(() => {
        const db = getFirestore();
        const coleccion = 'items';
        const itemsCollection = collection(db, coleccion);

        const q = query(
                itemsCollection,
            );
        
        const cargandoItems = new Promise((res, rej) => {
            getDocs(itemsCollection)
                .then((resfb) => {
                    if(resfb.size == 0){
                        console.log("Sin resultados");
                        //ver de ir a una pagina que muestre que no hay resultados y te deje ir a atras
                    }
                    res(resfb.docs.map((doc) => ({id: doc.id, ...doc.data()})));
                })
                
        })
        
        cargandoItems
        .then((resultado) => {
            //si cargo los items
            //filtro los datos
            let items = {};
            items = resultado;
            // console.log(items);
            if(filtro != "vacio"){
                // console.log("filtramos")
                items = resultado.filter(itm => itm.categoria === filtro)
                // console.log(items);
            }

            setResultado(items);
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
    
    //<NewItemList items = {[resultado]} />
    return (
    <>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Ocurrio un error cargando los items.'}</div>
        <div>{resultado.length > 0 &&
        <>
            <div className='container-fluid'>
                <p> ¡Esta es su lista de items!</p>
                <br /><br /> 
                <NewItemList {...resultado} cantidad={resultado.length} />
                <br /><br />
            </div>
        </>
      }</div>
    </>
  )
}
