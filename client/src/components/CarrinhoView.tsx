import React from "react";
import LittleCarItem from "../interfaces/LittleCarItem";

interface CarrinhoViewProps {
  itens: LittleCarItem[];
  onFinalizarCompra: () => void;
  aumentarQuantidade: (idProduto: number) => void;
  diminuirQuantidade: (idProduto: number) => void;
}

const CarrinhoView: React.FC<CarrinhoViewProps> = ({
  itens,
  onFinalizarCompra,
  aumentarQuantidade,
  diminuirQuantidade,
}) => {
  const totalGeral = itens.reduce(
    (total, item) => total + item.produto.preco * item.quantidade,
    0
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Carrinho de Compras</h2>

      {itens.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Seu carrinho está vazio.
        </p>
      ) : (
        <>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {itens.map((item) => (
              <li
                key={item.produto.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                  padding: "10px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img
                    src={item.produto.imagem}
                    alt={item.produto.nome}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "4px",
                      objectFit: "cover",
                    }}
                  />
                  <span>{item.produto.nome}</span>
                </div>
                <span>R$ {item.produto.preco.toFixed(2)}</span>
                <div>
                  <button
                    onClick={() => diminuirQuantidade(item.produto.id)}
                    style={{
                      backgroundColor: "#dc3545",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>
                  <span style={{ margin: "0 10px" }}>{item.quantidade}</span>
                  <button
                    onClick={() => aumentarQuantidade(item.produto.id)}
                    style={{
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>
                <span>R$ {(item.produto.preco * item.quantidade).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div
            style={{
              textAlign: "right",
              marginTop: "20px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Total Geral: R$ {totalGeral.toFixed(2)}
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={onFinalizarCompra}
              style={{
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Comprar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CarrinhoView;
