import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Product = ({ image, title, id, price }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/products/:prod?");
    };

    return (
        <tr
            key={id}
            className="d-flex flex-row justify-content-between align-items-center border m-2 p-1"
        >
            <td className="d-flex flex-column img-fluid m-1">
                <img src={`${image}`} alt="" width="130" height="160" />
            </td>
            <td className="d-flex flex-column sm-flex bd-highlight m-2 w-55 w-50">
                <div>
                    <p>Наименование товара: {title}</p>
                </div>
                <div>
                    <p key={id}>id товара: {id}</p>
                </div>
                <div>
                    <p>Стоимость: {price}</p>
                </div>
            </td>
            <td className="d-grid gap-2 align-self-end mb-2 w-20">
                <button
                    className="btn btn-primary btn-sm text-nowrap"
                    type="button"
                    onClick={handleClick}
                >
                    Открыть карточку
                </button>
            </td>
        </tr>
    );
};

Product.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number,
    price: PropTypes.number
    // handleClick: PropTypes.func
    // prodId: PropTypes.string.isRequired,
};

export default Product;
