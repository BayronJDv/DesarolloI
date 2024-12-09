// src/adminpages/Configuracion.jsx

import React from "react";
import "../css/AdminDashboard.css"; // Reutilizamos los estilos existentes.

const Configuracion = () => {
  const configData = [
    { label: "Nombre", value: "Ana Morales", icon: "✔️" },
    { label: "E-mail", value: "AnaM@gmail.com", icon: "✔️" },
    { label: "Contraseña", value: "********", icon: "✔️" },
    { label: "Método de Pago", value: "Paypal", icon: "✔️" },
  ];

  return (
    <div className="admin-dashboard">
      <h2>Configuración</h2>
      <div className="admin-controls">
        <p>Personaliza tu información de usuario y configuración general.</p>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Ajuste</th>
            <th>Valor</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {configData.map((item, index) => (
            <tr key={index}>
              <td>
                <span className="config-icon">{item.icon}</span> {item.label}
              </td>
              <td>{item.value}</td>
              <td>
                <button className="edit-btn" title="Editar">🖉</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Configuracion;
