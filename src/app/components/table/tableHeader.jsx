import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
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
    };

    // const returnSortCaret = (selectedSort, currentPath) => {
    //     if (selectedSort.path !== currentPath) return false; // { // return false;
    //     if (selectedSort.order === "asc") {
    //         return <i className="bi bi-caret-down-fill">QQQ</i>;
    //     } else {
    //         return <i className="bi bi-caret-up-fill"></i>;
    //     }
    // };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <td
                        key={column}
                        className="d-flex border justify-content-center m-2 mt-3 p-2"
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {/* {returnSortCaret(selectedSort, columns[column].path)} */}
                    </td>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    // handleChange: PropTypes.func,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
