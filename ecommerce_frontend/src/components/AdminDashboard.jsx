// src/components/AdminDashboard.jsx
import React, { useState } from "react";
import "../css/AdminDashboard.css"; // Importamos los estilos
import "../css/clientes.css";
import Articulos from "../adminpages/Articulos";
import Cliente from "../adminpages/Cliente";
import Ventas from "../adminpages/Ventas";
import Configuracion from "../adminpages/Configuracion"; // Importamos Configuracion.jsx

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("ARTÍCULOS");

  return (
    <div className="admin-dashboard-container">
      {/* Barra lateral */}
      <aside className="sidebar">
        <h3>Menú</h3>
        <ul>
          <li
            className={selectedSection === "CONFIGURACIÓN" ? "active" : ""}
            onClick={() => setSelectedSection("CONFIGURACIÓN")}
          >
            CONFIGURACIÓN
          </li>
          <li
            className={selectedSection === "VENTAS" ? "active" : ""}
            onClick={() => setSelectedSection("VENTAS")}
          >
            VENTAS
          </li>
          <li
            className={selectedSection === "ARTÍCULOS" ? "active" : ""}
            onClick={() => setSelectedSection("ARTÍCULOS")}
          >
            ARTÍCULOS
          </li>
          <li
            className={selectedSection === "CLIENTES" ? "active" : ""}
            onClick={() => setSelectedSection("CLIENTES")}
          >
            CLIENTES
          </li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        {selectedSection === "ARTÍCULOS" && <Articulos />}
        {selectedSection === "CLIENTES" && <Cliente />}
        {selectedSection === "CONFIGURACIÓN" && <Configuracion />} {/* Usamos Configuracion.jsx */}
        {selectedSection === "VENTAS" && <Ventas />}
      </main>
    </div>
  );
};

export default AdminDashboard;

