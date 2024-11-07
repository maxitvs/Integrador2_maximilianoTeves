import './App.css';
import Footer from './Componentes/Footer';
import Navegacion from './Componentes/Navegacion';
import Inicio from './Inicio/Inicio';
import Productos from './Productos/Productos';
import Alta from './Alta/Alta';
import Contacto from './Contacto/Contacto';
import Nosotros from './Nosotros/Nosotros';
import Carrito from './Carrito/Carrito';
import { Routes, Route } from 'react-router-dom'; 
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!modalVisible);

  return (
    <>
      { }
      <Navegacion onCarritoClick={toggleModal} />

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Productos' element={<Productos />} />
        <Route path='/Alta' element={<Alta />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='/Nosotros' element={<Nosotros />} />
      </Routes>

      { }
      <Carrito show={modalVisible} onHide={toggleModal} />

      <Footer />
    </>
  );
}

export default App;
