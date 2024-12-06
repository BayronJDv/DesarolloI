import React from "react";

const Configuracion = () => {
  const configData = [
    { label: "Nombre", value: "Ana Morales", icon: "✔️" },
    { label: "E-mail", value: "AnaM@gmail.com", icon: "✔️" },
    { label: "Contraseña", value: "1234", icon: "✔️" },
    { label: "Método de Pago", value: "Paypal", icon: "✔️" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Configuración</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          {configData.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    fontSize: "20px",
                    color: "purple",
                    fontWeight: "bold",
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.label}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.value}
                </span>
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
    </div>
  );
};

export default Configuracion;
