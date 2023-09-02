import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, handleChange, columns }) => {
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
    return (
        <>
            {Object.keys(columns).map((column) => (
                <div key={column}>
                    <div className="d-flex border justify-content-center m-2 mt-3 p-2">
                        <span
                            onClick={
                                columns[column].path
                                    ? () => handleSort(columns[column].path)
                                    : undefined
                            }
                            {...{ role: columns[column].path && "button" }}
                        >
                            {columns[column].name}
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    handleChange: PropTypes.func,
    columns: PropTypes.object.isRequired
};

export default TableHeader;
