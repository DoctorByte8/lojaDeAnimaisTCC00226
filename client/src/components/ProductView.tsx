import React from "react";

interface ProductViewProps {
  id: number;
  name: string;
  imageUrl?: string;
  description: string;
  price: number;
  quantity: number;
}

const ProductView: React.FC<ProductViewProps> = ({
  id,
  name,
  imageUrl,
  description,
  price,
  quantity,
}) => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      {/* Nome do Produto */}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{name}</h2>

      {/* Imagem do Produto */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "200px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span>Imagem do Produto</span>
          </div>
        )}
      </div>

      {/* Informações do Produto */}
      <p>
        <strong>Descrição:</strong> {description}
      </p>
      <p>
        <strong>Preço:</strong> R$ {price.toFixed(2)}
      </p>
      <p>
        <strong>Quantidade em Estoque:</strong> {quantity}
      </p>

      {/* Botões */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Alterar
        </button>
        <button
          style={{
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default ProductView;
