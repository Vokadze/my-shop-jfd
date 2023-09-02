import React from "react";
import PropTypes from "prop-types";

const Product = ({ product, handleChange }) => {
    return (
        <tbody>
            <tr
                key={product.id}
                className="d-flex flex-row justify-content-between align-items-center border m-2 p-1"
            >
                <td className="d-flex flex-column img-fluid m-1">
                    <img
                        src={`${product.image}`}
                        alt=""
                        width="130"
                        height="160"
                    />
                </td>
                <td className="d-flex flex-column sm-flex bd-highlight m-2 w-55 w-50">
                    <div>
                        <h6>Наименование товара: {product.title}</h6>
                    </div>
                    <div>
                        <p key={product.id}>id товара: {product.id}</p>
                    </div>
                    <div>
                        <p>Стоимость: {product.price}</p>
                    </div>
                </td>
                <td className="d-grid gap-2 align-self-end mb-2 w-20">
                    <button
                        className="btn btn-primary btn-sm text-nowrap"
                        type="button"
                        onClick={() => {
                            handleChange(product.id);
                        }}
                    >
                        Открыть карточку
                    </button>
                </td>
            </tr>
        </tbody>
    );
};

Product.propTypes = {
    product: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    handleChange: PropTypes.func
    // prodId: PropTypes.string.isRequired,
};

export default Product;
