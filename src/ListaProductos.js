import React from 'react';

const ListaProductos = () => {
    const productos = [
        {id:1,nombre:"Balon",precio:19.99},
        {id:2,nombre:"Zapatillas",precio:89.99},
        {id:3,nombre:"Canasta",precio:399.99}
    ]

const ElementosProductos = productos.map(prodcuto =>(
    <div key={producto.id}>
        <h2>{producto.title}</h2>
        <p>Precio: ${producto.precio}</p>
    </div>
    )
)

return(
    <div>
        <h1>Lista de productos</h1>
        {ElementosProductos}
    </div>
)


}

export default ListaProductos;