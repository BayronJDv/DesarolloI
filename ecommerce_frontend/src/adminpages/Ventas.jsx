// src/adminpages/Ventas.jsx

import React, { useState } from "react";
import "../css/AdminDashboard.css"; // Usamos los estilos existentes.

const Ventas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const salesData = [
    {
      codigoCompra: "a23b421c4",
      cedula: "1104260750",
      metodoPago: "Paypal",
      total: "$55.400",
    },
    {
      codigoCompra: "b12c345d6",
      cedula: "1234567890",
      metodoPago: "Tarjeta de crédito",
      total: "$100.200",
    },
    {
      codigoCompra: "c78d910e1",
      cedula: "0987654321",
      metodoPago: "Efectivo",
      total: "$75.600",
    },
  ];

  const filteredSales = salesData.filter(
    (sale) =>
      sale.codigoCompra.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.cedula.includes(searchTerm)
  );

  return (
    <div className="admin-dashboard">
      <h2>Ventas</h2>

      {/* Sección de métricas */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
        <div style={{ textAlign: "center", padding: "10px", background: "#e0f7fa", borderRadius: "8px" }}>
          <h3>Total Ventas</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>$153.644</p>
        </div>
        <div style={{ textAlign: "center", padding: "10px", background: "#e8f5e9", borderRadius: "8px" }}>
          <h3>Mejor Venta</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>$100.200</p>
        </div>
        <div style={{ textAlign: "center", padding: "10px", background: "#fce4ec", borderRadius: "8px" }}>
          <h3>Ganancias</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>$535.956</p>
        </div>
      </div>

      {/* Barra de búsqueda */}
      <div className="admin-controls">
        <input
          type="text"
          placeholder="Buscar venta"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tabla de ventas */}
      <table className="product-table">
        <thead>
          <tr>
            <th>Código Compra</th>
            <th>Cédula</th>
            <th>Ver Detalles</th>
            <th>Método de Pago</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {filteredSales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.codigoCompra}</td>
              <td>{sale.cedula}</td>
              <td>
                <button className="details-btn">ℹ</button>
              </td>
              <td>{sale.metodoPago}</td>
              <td>{sale.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ventas;
