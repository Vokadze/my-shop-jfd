import React from "react";
import PropTypes from "prop-types";

const Product = ({ product, handleChange, ...rest }) => {
    return (
        <div
            key={product.id}
            className="d-flex flex-row justify-content-between align-items-center border m-2 p-1"
        >
            <div className="d-flex flex-column img-fluid m-1">
                <img src={`${product.image}`} alt="" width="130" height="160" />
            </div>
            <div className="d-flex flex-column sm-flex bd-highlight m-2 w-55 w-50">
                <h6>Наименование товара: {product.title}</h6>
                <p key={product.id}>id товара: {product.id}</p>
                <p>Стоимость: {product.price}</p>
            </div>
            <div className="d-grid gap-2 align-self-end mb-2 w-20">
                <button
                    className="btn btn-primary btn-sm text-nowrap"
                    type="button"
                    onClick={() => {
                        handleChange(product.id);
                    }}
                >
                    Открыть карточку
                </button>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    handleChange: PropTypes.func
    // prodId: PropTypes.string.isRequired,
};

export default Product;
