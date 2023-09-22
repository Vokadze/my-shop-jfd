import React from "react";
import PropTypes from "prop-types";

const ProductHeader = ({ handleChange, columns }) => {
    return (
        <>
            {Object.keys(columns).map((column) => (
                <tr
                    key={column}
                    className="d-flex flex-row justify-content-between align-items-center border m-2 p-1"
                >
                    <td className="d-flex flex-column img-fluid m-1">
                        <img
                            src={`${columns[column].image}`}
                            alt=""
                            width="130"
                            height="160"
                        />
                    </td>
                    <td className="d-flex flex-column sm-flex bd-highlight m-2 w-55 w-50">
                        <div>
                            <p>
                                Наименование товара:
                                {column.title}
                            </p>
                        </div>
                        <div>
                            <p>id товара: {columns[column].id}</p>
                        </div>
                        <div>
                            <p>Стоимость: {columns[column.name]}</p>
                        </div>
                    </td>
                    <td className="d-grid gap-2 align-self-end mb-2 w-20">
                        <button
                            className="btn btn-primary btn-sm text-nowrap"
                            type="button"
                            onClick={() => {
                                handleChange(column);
                            }}
                        >
                            Открыть карточку
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
};

ProductHeader.propTypes = {
    data: PropTypes.array,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    handleChange: PropTypes.func,
    columns: PropTypes.object.isRequired
};

export default ProductHeader;
