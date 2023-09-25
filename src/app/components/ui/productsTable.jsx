import React from "react";
import PropTypes from "prop-types";
import Table from "../table/table";
import Product from "../table/product";
import TableHeader from "../table/tableHeader";

const ProductsTable = ({
    products,
    handleClick,
    onSort,
    selectedSort,
    handleSort,
    currentPath,
    ...rest
}) => {
    const columns = {
        name: { path: "price", name: "Функции сортировки (по стоимости)" }
    };

    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={products}
        >
            <TableHeader {...{ onSort, selectedSort, currentPath, columns }} />
            <tbody>
                {products.map((product) => (
                    <Product
                        {...rest}
                        {...product}
                        key={product.id}
                        onClick={handleClick}
                    />
                ))}
            </tbody>
        </Table>
    );
};

ProductsTable.propTypes = {
    products: PropTypes.array.isRequired,
    currentPath: PropTypes.func,
    handleClick: PropTypes.func,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    handleSort: PropTypes.object
};

export default ProductsTable;
