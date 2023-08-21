import React from "react";
import PropTypes from "prop-types";

const ProductCardList = ({ product, handleChange, ...rest }) => {
  return (
    <div
      key={product.id}
      className="d-flex flex-row justify-content-between align-items-center border m-2 p-3"
    >
      <div className="d-flex flex-column m-2">
        <img src={`${product.image}`} alt="" height="110" />
      </div>
      <div className="d-flex flex-column bd-highlight m-1">
        <h6>Наименование товара</h6>
        <p key={product.id}>id товара: {product.id}</p>
        <p>Стоимость: {product.price}</p>
      </div>
      <div className="d-flex flex-row justify-content-mb-end mb-2">
        <button
          className="btn btn-primary"
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

ProductCardList.propTypes = {
  product: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleChange: PropTypes.func,
  // prodId: PropTypes.string.isRequired,
};

export default ProductCardList;
