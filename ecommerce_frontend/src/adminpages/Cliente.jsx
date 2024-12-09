// src/adminpages/Cliente.jsx



import React, { useState } from "react";
import "../css/clientes.css";

//import "../css/AdminDashboard.css"; // Usamos los estilos existentes.


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
    <div className="clientes-dashboard">
      <h2>Clientes</h2>
      <div className="clientes-controls">
        <input
          type="text"
          placeholder="Buscar en cliente"
          className="clientes-search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="clientes-table">
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
              <td data-label="Nombre" >{client.name}</td>
              <td data-label="E-mail" >{client.email}</td>
              <td data-label="Método de Pago" >{client.payment}</td>
              <td data-label="Detalles" >
                <button className="clientes-details-btn">ℹ</button>
              </td>
              <td data-label="Borrar" >
                <button className="clientes-delete-btn">🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Cliente;
