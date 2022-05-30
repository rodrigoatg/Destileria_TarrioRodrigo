import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Navbar } from './components/navegacion/Navbar';
import { Inicio } from './components/paginas/inicio';
import { Ofertas } from './components/paginas/ofertas';
import { Tienda } from './components/paginas/tienda';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Inicio} />
            <Route path='/Tienda' exact component={Tienda} />
            <Route path='/Ofertas' exact component={Ofertas} />
        </Switch>
      </Router>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
