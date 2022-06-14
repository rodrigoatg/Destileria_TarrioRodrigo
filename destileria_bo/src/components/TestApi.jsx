import React , { useState, useEffect } from 'react'

export default function TestApi() {
  //declarar un estado
    //lo hago solo una vez para ahorrar recursos
    useEffect(() => {
      fetch('https://api.ipbase.com/v1/json/', undefined)
        .then((response) =>response.json())
        .then((data) =>{
            //aca ya tengo los datos
            console.log(data);
        })
        .catch((e) => {
            console.log('salio mal', e);
        })
        .finally(() => {
            console.log('fin');
        });
    }, [])
    
  return (
    <>
        <div>
            TestApi
        </div>
    </>
  )
}
