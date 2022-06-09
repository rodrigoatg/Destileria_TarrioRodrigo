import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

export default function ItemListContainer() {
  return (
    <>
        <div>
            <p> ¡Esta es su lista de items!</p>
            <br /><br /> 
            <ItemList />
            <br /><br />
            {/* <h3>Test del contador</h3>
            <br /><br />
            <ItemCount stock ="10" initial = "1" /> */}
        </div>
    </>
  )
}
