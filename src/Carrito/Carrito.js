import { useStat, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';

const Carrito = ({ show, onHide }) => {
    const [productosCarrito, setProductosCarrito] = useState([]);

    useEffect(() => {
        if (show) {
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            setProductosCarrito(carrito);
        }
    }, [show]);

    const actualizarCantidad = (id, cantidad) => {
        const carritoActualizado = productosCarrito.map((producto) => {
            if (producto.id === id) {
                return { ...producto, cantidad: Math.max(1, producto.cantidad + cantidad) };
            }
            return producto;
        });
        setProductosCarrito(carritoActualizado);
        localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    };

    const calcularSubtotal = () => {
        return productosCarrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    };

    return (
        <Modal show={show} onHide={onHide} backdrop="static" keyboard={true}>
            <Modal.Header closeButton>
                <Modal.Title>Carrito de Compras</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {productosCarrito.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    productosCarrito.map((producto) => (
                        <div key={producto.id} className="producto-carrito">
                            <img src={producto.img} alt={producto.nombre} className="img-carrito" />
                            <div>
                                <h5>{producto.nombre}</h5>
                                <p>Precio: ${producto.precio}</p>
                                <p>Cantidad: {producto.cantidad}</p>
                                <p>Subtotal: ${producto.precio * producto.cantidad}</p>
                                <Button variant="secondary" onClick={() => actualizarCantidad(producto.id, -1)}>-</Button>
                                <Button variant="secondary" onClick={() => actualizarCantidad(producto.id, 1)}>+</Button>
                            </div>
                        </div>
                    ))
                )}
                <hr />
                <h5>Total: ${calcularSubtotal()}</h5>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Carrito;