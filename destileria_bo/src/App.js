import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { Navbar } from './components/navegacion/Navbar';
import { Inicio } from './components/paginas/Inicio';
import { Ofertas } from './components/paginas/Ofertas';
import CartContext from './context/CartContext';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';


function App() {
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcXN_6nLuEwccy1bhtZVazvjcNXrv7s5c",
  authDomain: "destileriabo-tarrio.firebaseapp.com",
  projectId: "destileriabo-tarrio",
  storageBucket: "destileriabo-tarrio.appspot.com",
  messagingSenderId: "472316988263",
  appId: "1:472316988263:web:396cd57721a023d6927dc2"
};
// Initialize Firebase
initializeApp(firebaseConfig);

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
              <Route path='/item/:id' element={<ItemDetailContainer id/>} />
              <Route path='/categoria/:categoria' element={<ItemListContainer categoria />} />
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
