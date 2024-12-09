import "../css/ventas.css";

import React from "react";

const Ventas = () => {
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

  return (
    <div className="ventas-dashboard">
      <h1>Ventas</h1>

      <div className="ventas-stats">
        <div className="ventas-stat" style={{ backgroundColor: "#e0f7fa" }}>
          <h3>Total Ventas</h3>
          <p>$153.644</p>
        </div>
        <div className="ventas-stat" style={{ backgroundColor: "#e8f5e9" }}>
          <h3>Mejor Venta</h3>
          <p>$62.300</p>
        </div>
        <div className="ventas-stat" style={{ backgroundColor: "#fce4ec" }}>
          <h3>Ganancias</h3>
          <p>$535.956</p>
        </div>
      </div>

      <div>
        <h3>Listado de Ventas</h3>
        <table className="ventas-table">
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
            {salesData.map((sale, index) => (
              <tr key={index}>
                <td data-label="Código Compra">{sale.codigoCompra}</td>
                <td data-label="Cédula">{sale.cedula}</td>
                <td data-label="Detalles">
                  <button>Detalles</button>
                </td>
                <td data-label="Método de Pago">{sale.metodoPago}</td>
                <td data-label="Total">{sale.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ventas;
