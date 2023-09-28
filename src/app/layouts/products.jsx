import React from "react";
import { useParams } from "react-router-dom";
import ProductPage from "../components/page/productPage";
import ProductsListPage from "../components/page/productListPage";
import EditProductPage from "../components/page/editProductPage/editProductPage";

const Products = () => {
    const params = useParams();
    const { prodId, edit } = params;

    return (
        <>
            {prodId ? (
                edit ? (
                    <EditProductPage />
                ) : (
                    <ProductPage prodId={prodId} />
                )
            ) : (
                <ProductsListPage />
            )}
        </>
    );
};

export default Products;
