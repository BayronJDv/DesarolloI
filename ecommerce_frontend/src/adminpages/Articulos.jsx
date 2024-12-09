import React, { useState } from "react";
import "../css/AdminDashboard.css"; // Usamos los estilos del dashboard
import "../css/configuracionArt.css";


const Articulos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const products = [
    { id: 1, product: "Nike Air Max", brand: "Nike", availability: 9 },
    { id: 2, product: "Adidas UltraBoost", brand: "Adidas", availability: 5 },
    { id: 3, product: "Puma RS-X", brand: "Puma", availability: 7 },
  ];


  const filteredProducts = products.filter(
    (product) =>
      product.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="admin-dashboard">
      <h2>Articulos</h2>
      <div className="admin-controls">
        <input
          type="text"
          placeholder="Buscar en productos"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="filter-btn">Filtro</button>
        <button className="add-product-btn">+ Agregar Producto</button>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Marca</th>
            <th>Disponibilidad</th>
            <th>Ver Detalles</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.product}</td>
              <td>{product.brand}</td>
              <td>{product.availability}</td>
              <td>
                <button className="details-btn">ℹ</button>
              </td>
              <td>
                <button className="edit-btn">✎</button>
                <button className="delete-btn">🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Articulos;


