import React from "react";
import CarrinhoView from "../components/CarrinhoView";
import { useCarrinho } from "../context/CarrinhoContext";

const CarrinhoPage = () => {
  const { itens, aumentarQuantidade, diminuirQuantidade } = useCarrinho();

  const finalizarCompra = () => {
    alert("Compra finalizada! Produtos serão removidos do carrinho.");
    console.log("Compra finalizada com os seguintes itens:", itens);
  };

  return (
    <CarrinhoView
      itens={itens}
      onFinalizarCompra={finalizarCompra}
      aumentarQuantidade={aumentarQuantidade}
      diminuirQuantidade={diminuirQuantidade}
    />
  );
};

export default CarrinhoPage;
