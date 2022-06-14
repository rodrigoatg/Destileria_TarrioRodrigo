import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/navegacion/Navbar';
import { Inicio } from './components/paginas/Inicio';
import { Ofertas } from './components/paginas/Ofertas';
import { Tienda } from './components/paginas/Tienda';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
            <Routes>
                <Route path='/Inicio' exact component={Inicio} />
                <Route path='/Tienda' exact component={Tienda} />
                <Route path='/Ofertas' exact component={Ofertas} />
            </Routes>
          </Navbar>
      </Router>
      <ItemDetailContainer />
      {/* <ItemListContainer /> */}

    </div>
    
  );
}

export default App;
