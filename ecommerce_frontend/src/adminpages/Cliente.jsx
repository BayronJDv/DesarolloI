// src/adminpages/Cliente.jsx


import React, { useState } from "react";
import "../css/AdminDashboard.css"; // Usamos los estilos existentes.


const Cliente = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const clients = [
    { id: 1, name: "Ana Morales", email: "AnaM@gmail.com", payment: "PayPal" },
    { id: 2, name: "Carlos Pérez", email: "CarlosP@gmail.com", payment: "Credit Card" },
    { id: 3, name: "María López", email: "MariaL@gmail.com", payment: "Bank Transfer" },
  ];


  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="admin-dashboard">
      <h2>Clientes</h2>
      <div className="admin-controls">
        <input
          type="text"
          placeholder="Buscar en cliente"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>E-mail</th>
            <th>Método de Pago</th>
            <th>Ver Detalles</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.payment}</td>
              <td>
                <button className="details-btn">ℹ</button>
              </td>
              <td>
                <button className="delete-btn">🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Cliente;
