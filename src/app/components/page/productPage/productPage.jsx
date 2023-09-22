import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api/index";
import { useHistory } from "react-router-dom";

const ProductPage = ({ prodId }) => {
    const history = useHistory();
    const [product, setProduct] = useState();

    useEffect(() => {
        api.products.getById(prodId).then((data) => setProduct(data));
    });

    const handleClick = () => {
        history.push("/products");
    };

    if (product) {
        return (
            <>
                <img src={`${product.image}`} alt="" width="130" height="160" />
                <p>{product.title}</p>
                <p>Наименование товара: {product.title}</p>
                <p>id товара: {product.id}</p>
                <p>Стоимость: {product.price}</p>
                <button onClick={handleClick}>Список товаров</button>
            </>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

ProductPage.propTypes = {
    prodId: PropTypes.string.isRequired
};

export default ProductPage;
