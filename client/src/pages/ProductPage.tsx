import React from "react";
import { useParams } from "react-router-dom";
import ProductView from "../components/ProductView";

const ProductPage = (produtoId: any) => {

  const product = {
    id: produtoId,
    name: "Tênis Esportivo",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Imagem+do+Produto",
    description:
      "Tênis esportivo confortável, ideal para corridas e atividades físicas.",
    price: 299.99,
    quantity: 15,
  };

  return (
    <div style={{ padding: "40px" }}>
      <ProductView
        id={product.id}
        name={product.name}
        imageUrl={product.imageUrl}
        description={product.description}
        price={product.price}
        quantity={product.quantity}
      />
    </div>
  );
};

export default ProductPage;
