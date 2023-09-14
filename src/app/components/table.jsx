import React from "react";
import PropTypes from "prop-types";
import Product from "./product";
import TableHeader from "./tableHeader";
// import TableBody from "./tableBody";
// import ProductHeader from "./productHeader";
// import Product from "./product";

const Table = ({
    onSort,
    selectedSort,
    columns,
    data: products,
    handleChange,
    children,
    ...rest
}) => {
    return (
        <table className="table table-borderless">
            {children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, columns }} />
                    {/* <TableBody {...{ columns, data: products }} /> */}
                    {/* <ProductHeader
                        {...{
                            columns,
                            handleChange,
                            ...rest
                        }}
                    /> */}
                    <tbody>
                        {products.map((product) => (
                            <Product
                                {...rest}
                                {...product}
                                key={product.id}
                                handleChange={handleChange}
                            />
                        ))}
                    </tbody>
                </>
            )}
        </table>
    );
};

Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.object,
    data: PropTypes.array.isRequired,
    handleChange: PropTypes.func,
    children: PropTypes.array
};

export default Table;
