import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const ProductHeader = ({
    data,
    onSort,
    selectedSort,
    handleChange,
    columns
}) => {
    // const handleSort = (item) => {
    //     if (selectedSort.path === item) {
    //         onSort({ ...selectedSort });
    //     }
    // };

    const handleSort = (item) => {
        console.log(item);
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
        return _.get(item);
    };
    return (
        <>
            {/* {data.map((item) => ( */}
            {/* <div key={item.id}> */}
            {Object.keys(columns).map((column) => (
                <div
                    key={column}
                    className="d-flex flex-row justify-content-between align-items-center border m-2 p-1"
                >
                    <div className="d-flex flex-column img-fluid m-1">
                        <img
                            onClick={
                                columns[column].path
                                    ? () => handleSort(columns[column].path)
                                    : undefined
                            }
                            src={`${columns[column].image}`}
                            alt=""
                            width="130"
                            height="160"
                        />
                    </div>
                    <div className="d-flex flex-column sm-flex bd-highlight m-2 w-55 w-50">
                        <h6
                            onClick={
                                column.path
                                    ? () => handleSort(columns[column].path)
                                    : undefined
                            }
                        >
                            Наименование товара:
                            {column.title}
                        </h6>
                        <p
                            onClick={
                                columns[column].path
                                    ? () => handleSort(columns[column].path)
                                    : undefined
                            }
                        >
                            id товара: {columns[column].id}
                        </p>
                        <p
                            onClick={
                                columns[column].path
                                    ? () => handleSort(columns[column].path)
                                    : undefined
                            }
                        >
                            Стоимость: {columns[column.name]}
                        </p>
                    </div>
                    <div className="d-grid gap-2 align-self-end mb-2 w-20">
                        <button
                            className="btn btn-primary btn-sm text-nowrap"
                            type="button"
                            onClick={() => {
                                handleChange(column);
                            }}
                        >
                            Открыть карточку
                        </button>
                    </div>
                </div>
            ))}
            {/* </div> */}
            {/* // ))} */}
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
