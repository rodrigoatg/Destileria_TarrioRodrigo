import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/navegacion/Navbar';
import { Inicio } from './components/paginas/Inicio';
import { Ofertas } from './components/paginas/Ofertas';
import { Tienda } from './components/paginas/Tienda';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContext from './context/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <CartContext >
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/inicio' element={<Inicio />} />
              <Route path="/tienda" element={<ItemListContainer />} />
              <Route path='/ofertas' element={<Ofertas />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/category/:id' element={<ItemListContainer />} />
              <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
        {/* <ItemDetailContainer /> */}
        {/* <ItemListContainer /> */}

      </div>
    </CartContext>
  );
}

export default App;
