import React from "react";
import PropTypes from "prop-types";
// import _ from "lodash";

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

    // const handleSort = (item) => {
    //     console.log(item);
    //     if (selectedSort.path === item) {
    //         onSort({
    //             ...selectedSort,
    //             order: selectedSort.order === "asc" ? "desc" : "asc"
    //         });
    //     } else {
    //         onSort({ path: item, order: "asc" });
    //     }
    //     return _.get(item);
    // };
    return (
        <>
            {/* {data.map((item) => ( */}
            {/* <div key={item.id}> */}
            {Object.keys(columns).map((column) => (
                <tr
                    key={column}
                    className="d-flex flex-row justify-content-between align-items-center border m-2 p-1"
                >
                    <td className="d-flex flex-column img-fluid m-1">
                        <img
                            // onClick={() => handleSort(columns[column].path)}
                            src={`${columns[column].image}`}
                            alt=""
                            width="130"
                            height="160"
                        />
                    </td>
                    <td className="d-flex flex-column sm-flex bd-highlight m-2 w-55 w-50">
                        <div>
                            <p
                            // onClick={() => handleSort(columns[column].path)}
                            >
                                Наименование товара:
                                {column.title}
                            </p>
                        </div>
                        <div>
                            <p
                            // onClick={() => handleSort(columns[column].path)}
                            >
                                id товара: {columns[column].id}
                            </p>
                        </div>
                        <div>
                            <p
                            // onClick={() => handleSort(columns[column].name)}
                            >
                                Стоимость: {columns[column.name]}
                            </p>
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
