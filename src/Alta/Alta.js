import React, { useRef } from 'react';

const Alta = () => {
    const Formulario = () => {
        const formRef = useRef(null);

        const handleSubmit = (event) => {
            event.preventDefault();
            
            if (formRef.current.checkValidity()) {
                console.log('Formulario válido y listo para enviar');
            } else {
                formRef.current.reportValidity();
            }
        };

        return (
            <div className="flexbox">
                <form ref={formRef} className='formulario' onSubmit={handleSubmit} noValidate>
                    <label className='label' htmlFor='nombre'>
                        Nombre:
                        <input className='input' type="text" name="nombre" required />
                    </label>
                    <label className='label' htmlFor="precio">
                        Precio:
                        <input className='input' type="text" name="precio" required/>
                    </label>
                    <label className='label' htmlFor="stock">
                        Stock:
                        <input className='input' type="text" name="stock" required />
                    </label>
                    <label className='label' htmlFor="marca">
                        Marca:
                        <input className='input' type="text" name="marca" required />
                    </label>
                    <label className='label' htmlFor="categoria">
                        Categoría:
                        <input className='input' type="text" name="categoria" required />
                    </label>
                    <label className='label' htmlFor="descripcion-corta">
                        Descripción corta:
                        <input className='input' minLength="5" maxLength="20" type="text" name="descripcion-corta" required />
                    </label>
                    <label className='label' htmlFor="descripcion-larga">
                        Descripción larga:
                        <input className='input' minLength="35" maxLength="100" type="text" name="descripcion-larga" required />
                    </label>
                    <label className='label' htmlFor="envio-sin-cargo">
                        Envío sin cargo:
                        <input className='input' type="checkbox" name="envio-sin-cargo" />
                    </label>
                    <label className='label' htmlFor="edad">
                        Edad:
                        <input className='input' min="18" max="99" type="number" name="edad" required />
                    </label>
                    <label className='label' htmlFor="foto">
                        Foto:
                        <input className='input' type="file" name="foto" required />
                    </label>
                    <button className='buttonForm' type="submit">Enviar</button>
                </form>
            </div>
        );
    };

    return <Formulario />;
};

export default Alta;

