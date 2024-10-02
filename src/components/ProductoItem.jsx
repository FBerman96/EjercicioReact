import React, { useState } from 'react';

function ProductoItem({ ID, nombre, precio, actualizarTotal }) {
  const [cantidad, setCantidad] = useState(0);
  const [totalProducto, setTotalProducto] = useState(0);

  const handleCantidadChange = (e) => {
    const nuevaCantidad = parseInt(e.target.value) || 0; 
    setCantidad(nuevaCantidad);

    const nuevoTotal = nuevaCantidad * precio; 
    setTotalProducto(nuevoTotal);
    
    actualizarTotal(ID, nuevoTotal); 
  };

  return (
    <tr>
      <td>{ID}</td>
      <td>{nombre}</td>
      <td>${precio}</td>
      <td>
        <input 
          type="number" 
          value={cantidad} 
          onChange={handleCantidadChange} 
          min="0"
        />
      </td>
      <td>${totalProducto}</td>
    </tr>
  );
}

export default ProductoItem;
