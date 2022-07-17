import {collection, getDocs, getFirestore} from 'firebase/firestore';

export default function Connection() {
    
    const db = getFirestore();

    const itemsCollection = collection(db, "items");

    const promesaCarga = new Promise((res, rej) => {
      res([
        getDocs(itemsCollection)
        .then(
          (snapshot) => {
            res = snapshot.docs.map( (doc) => ({id: doc.id, ...doc.data()}))
          }
        )
        .catch(
          (error) =>{
            rej = error;
          }
        )
      ]);
    })
  
    return promesaCarga
}
 