import React, { createContext, useContext, useState } from "react";
import LittleCarItem from "../interfaces/LittleCarItem";
import Produto from "../interfaces/Produto";

interface CarrinhoContextProps {
  itens: LittleCarItem[];
  adicionarAoCarrinho: (produto: Produto) => void;
  aumentarQuantidade: (idProduto: number) => void;
  diminuirQuantidade: (idProduto: number) => void;
}

const CarrinhoContext = createContext<CarrinhoContextProps | undefined>(
  undefined
);

export const CarrinhoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [itens, setItens] = useState<LittleCarItem[]>([]);

  const adicionarAoCarrinho = (produto: Produto) => {
    setItens((prevItens) => {
      const itemExistente = prevItens.find(
        (item) => item.produto.id === produto.id
      );

      if (itemExistente) {
        return prevItens.map((item) =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...prevItens, { id: Date.now(), produto, quantidade: 1 }];
    });

    console.log(`Produto ${produto.nome} adicionado ao carrinho com sucesso!`);
  };

  const aumentarQuantidade = (idProduto: number) => {
    setItens((prevItens) =>
      prevItens.map((item) =>
        item.produto.id === idProduto
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  };

  const diminuirQuantidade = (idProduto: number) => {
    setItens((prevItens) =>
      prevItens.map((item) =>
        item.produto.id === idProduto && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  };

  return (
    <CarrinhoContext.Provider
      value={{ itens, adicionarAoCarrinho, aumentarQuantidade, diminuirQuantidade }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
  }
  return context;
};
