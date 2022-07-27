import Item from './Item';

export default function ItemList(items) {
//dibuja cada item pasado por props utilizando el componente Item
  let itemConvertido = [];

  for(let i = 0; i < parseInt(items.cantidad) ; i++){
    itemConvertido.push(items[i]);
  }

  return (
  <>
    <div className='container'>
        <ul className='d-flex flex-row list-unstyled'>
          {itemConvertido.map((item) => (
              <li className='px-5 mx-2' key={item.id}>
                <Item id = {item.id} title ={item.titulo} description = {item.descripcion} price = {item.precio} pictureUrl = {item.pictureUrl} />
              </li>
          )
          )}
        </ul>
    </div>  
  </>
  )
}
