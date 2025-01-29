import React, { useState } from "react";

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  imagem: string;
}

interface CarrinhoViewProps {
  produtos: Produto[];
  onFinalizarCompra: () => void;
}

const CarrinhoView: React.FC<CarrinhoViewProps> = ({ produtos, onFinalizarCompra }) => {
  const [carrinho, setCarrinho] = useState<Produto[]>(produtos);

  const aumentarQuantidade = (id: number) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((produto) =>
        produto.id === id ? { ...produto, quantidade: produto.quantidade + 1 } : produto
      )
    );
  };

  const diminuirQuantidade = (id: number) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((produto) =>
        produto.id === id && produto.quantidade > 1
          ? { ...produto, quantidade: produto.quantidade - 1 }
          : produto
      )
    );
  };

  const totalGeral = carrinho.reduce(
    (total, produto) => total + produto.preco * produto.quantidade,
    0
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center" }}>Carrinho de Compras</h2>

      {carrinho.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul style={{ listStyleType: "none", padding: "0" }}>
            {carrinho.map((produto) => (
              <li
                key={produto.id}
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
                    src={produto.imagem}
                    alt={produto.nome}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "4px",
                      objectFit: "cover",
                    }}
                  />
                  <span>{produto.nome}</span>
                </div>

                <span>R$ {produto.preco.toFixed(2)}</span>

                <div>
                  <button
                    onClick={() => diminuirQuantidade(produto.id)}
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
                  <span style={{ margin: "0 10px" }}>{produto.quantidade}</span>
                  <button
                    onClick={() => aumentarQuantidade(produto.id)}
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

                <span>R$ {(produto.preco * produto.quantidade).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div style={{ textAlign: "right", marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
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
