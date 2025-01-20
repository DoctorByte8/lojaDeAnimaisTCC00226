import React from "react";
import { useParams } from "react-router-dom";
import ProductView from "../components/ProductView";

const ProductPage = (produtoId: any) => {

  const { produtoidstring } = useParams();

  return <div><ProductView
        idstring = {produtoidstring}
    /></div>;
};

export default ProductPage;
