import React from "react";
import PropTypes from "prop-types";
import Table from "./table";
import Product from "./product";
import TableHeader from "./tableHeader";
// import TableBody from "./tableBody";
// import ProductHeader from "./productHeader";
// import Product from "./product";

const ProductsTable = ({
    products,
    // product,
    handleChange,
    onSort,
    selectedSort,
    handleSort,
    currentPath,
    ...rest
}) => {
    const columns = {
        name: { path: "price", name: "Функции сортировки (по стоимости)" }
        // image: {
        //     component: (product) => (
        //         // <td className="d-flex flex-column img-fluid m-1">
        //         <img src={`${product.image}`} alt="" width="130" height="160" />
        //         // </td>
        //     )
        // },
        // title: {
        //     path: "title",
        //     component: (product) => (
        //         <h6
        //         // className="d-flex flex-column sm-flex bd-highlight m-2 w-55 w-50"
        //         >
        //             Наименование товара: {product.title}
        //         </h6>
        //     )
        // },
        // id: {
        //     path: "id",
        //     component: (product) => (
        //         <p
        //         // className="d-flex flex-column sm-flex bd-highlight m-2 w-55 w-50"
        //         >
        //             id товара: {product.id}
        //         </p>
        //     )
        // },
        // price: {
        //     path: "price",
        //     component: (product) => (
        //         <p
        //         // className="d-flex flex-column sm-flex bd-highlight m-2 w-55 w-50"
        //         >
        //             Стоимость: {product.price}
        //         </p>
        //     )
        // },
        // button: {
        //     component: (product) => (
        //         <button
        //             className="btn btn-primary btn-sm text-nowrap"
        //             type="button"
        //             onClick={() => {
        //                 handleChange(product.id);
        //             }}
        //         >
        //             Открыть карточку
        //         </button>
        //     )
        // }
    };

    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={products}
        >
            <TableHeader {...{ onSort, selectedSort, currentPath, columns }} />
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
        </Table>
    );
};

ProductsTable.propTypes = {
    products: PropTypes.array.isRequired,
    currentPath: PropTypes.func,
    handleChange: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    handleSort: PropTypes.object
};

export default ProductsTable;
