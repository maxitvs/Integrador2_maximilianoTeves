import React from 'react';
import { Link } from 'react-router-dom';
import './Navegacion.css';
import imagenLogo from '../images/imagenLogo.png';


const Navegacion = ({ onCarritoClick }) => {
    return (
        <>
            <header>
                <nav className="navbar">
                    <Link to={"/"}>
                        <img src={imagenLogo} alt="imágen logo" className="imagenLogo" />
                    </Link>
                    <ol><Link to={"/"}>INICIO</Link></ol>
                    <ol><Link to={"/Productos"}>PRODUCTOS</Link></ol>
                    <ol><Link to={"/Alta"}>ALTA</Link></ol>
                    <ol><Link to={"/Contacto"}>CONTACTO</Link></ol>
                    <ol><Link to={"/Nosotros"}>NOSOTROS</Link></ol>
                    <input className="buscar" type="search" id="search" name="search" />
                    <button className="boton">Buscar</button>
                    <button variant="outline-primary" onClick={onCarritoClick}>
                        <i className="bi bi-cart"></i>
                    </button>
                </nav>
            </header>
        </>
    );
}

export default Navegacion;

