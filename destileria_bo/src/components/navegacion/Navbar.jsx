import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link  className="navbar-brand" to ='/Inicio'>
                    <img src= './testicono.jpg' width={50} alt="Icono" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to= "/Inicio">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to= '/Tienda'>Tienda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to= '/Ofertas'>Ofertas</Link>
                        </li>
                    </ul>
                </div>
                <div> 
                    <CartWidget  />
                </div>
            </div>
        </nav>
    </div>
  )
}
