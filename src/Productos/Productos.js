import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgLiqFre from '../images/liquidofreno.jpeg';
import imgAceMo from '../images/aceitemoto.jpeg';
import imgBat from '../images/bateria.jpeg';
import { CardSubtitle } from 'react-bootstrap';
import '../App.css'




const productos = [
    {id:1, nombre: "Líquido de Frenos", precio: 7000, descripción: "El Líquido Para Frenos Tipo 3 500ml Wagner Lockheed 130024 es un producto de alta calidad, diseñado para garantizar la máxima eficiencia y seguridad en tu vehículo. Cuenta con garantía oficial y certificación de fábrica.", img: imgLiqFre },
    {id:2, nombre: "Aceite para Moto", precio: 6000, descripción: "Shell Advance AX3 es un aceite ideal para ciclomotores y scooters con motores pequeños, que funcionan en caliente y soportan grandes esfuerzos, y que requieren un rendimiento fiable del aceite para tener protección continua.", img: imgAceMo },
    {id:3, nombre: "Batería", precio: 115.000, descripción: "oura es una de las mejores baterías del mercado. Con una capacidad de 150 AMP, esta batería es capaz de suministrar una cantidad constante de energía durante un largo período de tiempo.", img: imgBat },
];

const Productos = () => {

    const agregarAlCarrito = (producto) => {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        const existe = carrito.find((item) => item.id === producto.id);

        if (existe) {
            existe.cantidad += 1;
        } else {
            producto.cantidad = 1;
            carrito.push(producto);
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert('Producto agregado al carrito');
    };

    return (
        <div className='flexbox'>
            {productos.map((producto) => (
                <div key={producto.id} className="flex-item">
                    <Card>
                        <Card.Img src={producto.img} alt={producto.nombre} variant="top" />
                        <Card.Body>
                            <Card.Title className='h2'>{producto.nombre}</Card.Title>
                            <CardSubtitle className='h3'>${producto.precio.toLocaleString()}</CardSubtitle>
                            <Card.Text>{producto.descripción}</Card.Text>
                            <Button onClick={() => agregarAlCarrito(producto)} className='button' variant="primary">
                                Agregar al carrito
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Productos;

    /*return (
        <div className='flexbox'>
            <div className="flex-item">
                <div className="productos">
                    <Card>
                        <Card.Img src={imgLiqFre} alt="liquido-de-frenos" variant="top" />
                        <Card.Body>
                            <Card.Title className='h2'>Líquido de Frenos</Card.Title>
                            <CardSubtitle className='h3'>$7.000</CardSubtitle>
                            <Card.Text>
                                El Líquido Para Frenos Tipo 3 500ml Wagner Lockheed 130024 es un producto de alta calidad, diseñado para garantizar la máxima eficiencia y seguridad en tu vehículo. Cuenta con garantía oficial y certificación de fábrica.
                            </Card.Text>
                            <Button className='button' variant="primary">Agregar al carrito</Button>
                        </Card.Body>;
                    </Card>
                </div>
            </div>

            <div className="flex-item">
                <div className="productos">
                    <Card style={{ width: '18rem', display: 'flex' }}>
                        <Card.Img src={imgAceMo} alt="aceite-de-moto" variant="top" />
                        <Card.Body>
                            <Card.Title className='h2'>Aceite para Moto</Card.Title>
                            <CardSubtitle className='h3'>$6.000</CardSubtitle>
                            <Card.Text>
                                Shell Advance AX3 es un aceite ideal para ciclomotores y scooters con motores pequeños, que funcionan en caliente y soportan grandes esfuerzos, y que requieren un rendimiento fiable del aceite para tener protección continua.
                            </Card.Text>
                            <Button className='button' variant="primary">Agregar al carrito</Button>
                        </Card.Body>;
                    </Card>
                </div>
            </div>

            <div className="flex-item">
                <div className="productos">
                    <Card style={{ width: '18rem', display: 'flex' }}>
                        <Card.Img src={imgBat} alt="bateria" variant="top" />
                        <Card.Body>
                            <Card.Title className='h2'>Batería</Card.Title>
                            <CardSubtitle className='h3'>$115.000</CardSubtitle>
                            <Card.Text>
                                Moura es una de las mejores baterías del mercado. Con una capacidad de 150 AMP, esta batería es capaz de suministrar una cantidad constante de energía durante un largo período de tiempo.
                            </Card.Text>
                            <Button className='button' variant="primary">Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Productos;
*/