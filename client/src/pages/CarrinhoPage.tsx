import React, { useState } from "react";
import CarrinhoView from "../components/CarrinhoView";

const CarrinhoPage = () => {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: "Tênis Esportivo",
      preco: 199.99,
      quantidade: 2,
      imagem:
        "https://via.placeholder.com/150?text=Tênis+Esportivo", // Imagem fictícia
    },
    {
      id: 2,
      nome: "Camiseta Básica",
      preco: 49.99,
      quantidade: 1,
      imagem:
        "https://via.placeholder.com/150?text=Camiseta+Básica", // Imagem fictícia
    },
    {
      id: 3,
      nome: "Relógio Digital",
      preco: 299.99,
      quantidade: 1,
      imagem:
        "https://via.placeholder.com/150?text=Relógio+Digital", // Imagem fictícia
    },
  ]);

  const finalizarCompra = () => {
    alert("Compra finalizada! Produtos serão removidos do carrinho.");
    setProdutos([]);
  };

  return (
    <div>
      <CarrinhoView produtos={produtos} onFinalizarCompra={finalizarCompra} />
    </div>
  );
};

export default CarrinhoPage;

