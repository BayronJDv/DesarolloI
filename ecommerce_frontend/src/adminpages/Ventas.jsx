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
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5", height: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Ventas</h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
        <div style={{ textAlign: "center", padding: "10px", background: "#e0f7fa", borderRadius: "8px" }}>
          <h3>Total Ventas</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>$153.644</p>
        </div>
        <div style={{ textAlign: "center", padding: "10px", background: "#e8f5e9", borderRadius: "8px" }}>
          <h3>Mejor Venta</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>$62.300</p>
        </div>
        <div style={{ textAlign: "center", padding: "10px", background: "#fce4ec", borderRadius: "8px" }}>
          <h3>Ganancias</h3>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>$535.956</p>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: "10px" }}>Listado de Ventas</h3>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "#ffffff", borderRadius: "8px" }}>
          <thead>
            <tr style={{ background: "#eeeeee" }}>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>Código Compra</th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>Cédula</th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>Ver Detalles</th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>Método de Pago</th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{sale.codigoCompra}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{sale.cedula}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
                  <button style={{ padding: "5px 10px", backgroundColor: "#2196f3", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Detalles
                  </button>
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{sale.metodoPago}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{sale.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ventas;
