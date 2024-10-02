import React, { useState } from 'react';
import ProductoItem from './ProductoItem.jsx';
import '../App.css';

const productos = [
    { ID: 1, nombre: "Lápiz", precio: 500 },
    { ID: 2, nombre: "Cuaderno", precio: 1200 },
    { ID: 3, nombre: "Borrador", precio: 300 },
    { ID: 4, nombre: "Tijeras", precio: 2000 },
    { ID: 5, nombre: "Pegamento", precio: 1500 }
];

function ProductosList() {
  const [precioTotal, setPrecioTotal] = useState(0);
  const [totalesProductos, setTotalesProductos] = useState({}); 

  const actualizarTotal = (id, totalProducto) => {
    setTotalesProductos(prevTotales => {
      const nuevosTotales = { ...prevTotales, [id]: totalProducto };


      const sumaTotal = Object.values(nuevosTotales).reduce((acc, total) => acc + total, 0);
      setPrecioTotal(sumaTotal);

      return nuevosTotales;
    });
  };

  return (
    <div className="productos-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <ProductoItem 
              key={producto.ID} 
              ID={producto.ID} 
              nombre={producto.nombre} 
              precio={producto.precio} 
              actualizarTotal={actualizarTotal} 
            />
          ))}
        </tbody>
      </table>
      <h3>Precio Total: ${precioTotal}</h3> {}
    </div>
  );
}

export default ProductosList;
