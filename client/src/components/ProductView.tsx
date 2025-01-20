import React from "react";
import useProdutosStore from "../store/useProdutosStore.ts";
import useProdutoSingular from "../hooks/useProdutoSingular.ts";
import {useNavigate } from "react-router-dom";
import Produto from "../interfaces/Produto.ts";
import useRemoverProduto from "../hooks/useRemoverProduto.ts";
import useProdutoRemovendoStore from "../store/useProdutoRemovendoStore.ts";
//import TabelaDeProdutos from "../TabelaDeProdutos.tsx";


interface Props {
  idstring?: string;

}

const ProductView = ({idstring} : Props) => {
  const navigate = useNavigate();

  const {
    mutate: removerProduto,
    error: errorRemocaoProduto,
  } = useRemoverProduto();

  const setProdutoSelecionado = useProdutosStore(
      (s) => s.setProdutoSelecionado
  );

  const dataproduto = useProdutoSingular(idstring == null ? "" : idstring);

  const produto = dataproduto.data

  const produtoremovido = useProdutoRemovendoStore((s) => s.produtoRemovendo)
    const setProdutoremovido = useProdutoRemovendoStore((s) => s.setProdutoRemovendo);

    const tratarRemocaoDeProduto = (id: number) => {
        const produto = ({} as Produto)
        produto.id = id;
        removerProduto(id);
        setProdutoremovido(produto);
    };
    if (errorRemocaoProduto) throw errorRemocaoProduto;


  return (
    <>
      {!(produto == null) ? (

          <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
          >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{produto.nome}</h2>

          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            {produto.imagem ? (
              <img
                src={produto.imagem}
                alt={produto.nome}
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

          <p>
            <strong>Data:</strong> {produto.dataCadastro.toLocaleString()}
          </p>
          <p>
            <strong>Preço:</strong> R$ {produto.preco.toFixed(2)}
          </p>
          <p>
            <strong>Quantidade em Estoque:</strong> {produto.qtdEstoque}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => {
                setProdutoSelecionado(produto)
                navigate("/cadastrar-produto")
                }
                }


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
              onClick={() => tratarRemocaoDeProduto(parseInt(idstring as string))}

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

        ) : (<> Produto não existe</>)}

    </>
    
  );
};

export default ProductView;
