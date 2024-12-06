import React from "react";

const Configuracion = () => {
  const configData = [
    { label: "Nombre", value: "Ana Morales", icon: "✔️" },
    { label: "E-mail", value: "AnaM@gmail.com", icon: "✔️" },
    { label: "Contraseña", value: "1234", icon: "✔️" },
    { label: "Método de Pago", value: "Paypal", icon: "✔️" },
  ];

  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5", height: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Configuración</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {configData.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#ffffff",
              padding: "15px 20px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  fontSize: "20px",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                {item.icon}
              </span>
              <span style={{ fontWeight: "bold" }}>{item.label}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>{item.value}</span>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                title="Editar"
              >
                🖉
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Configuracion;

