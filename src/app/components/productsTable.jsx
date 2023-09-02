import React from "react";
import PropTypes from "prop-types";
// import Product from "./product";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import ProductHeader from "./productHeader";

const ProductsTable = ({
    products,
    handleChange,
    onSort,
    selectedSort,
    handleSort,
    ...rest
}) => {
    const columns = {
        name: { path: "price", name: "Функции сортировки (по стоимости)" },
        image: {
            path: "product.image",
            component: (product) => (
                <img
                    className="d-flex flex-column img-fluid m-1"
                    // onClick={() => handleSort(product.image)}
                    src={`${product.image}`}
                    alt=""
                    width="130"
                    height="160"
                />
            )
        },
        title: {
            path: "product.title",
            component: (product) => (
                <h6
                    className="d-flex flex-column sm-flex bd-highlight m-2 w-55 w-50"
                    // onClick={() => handleSort(product.title)}
                >
                    Наименование товара: {product.title}
                </h6>
            )
        },
        id: {
            path: "product.id",
            component: (product) => (
                <p
                    className="d-flex flex-column sm-flex bd-highlight m-2 w-55 w-50"
                    // onClick={() => handleSort(product.id)}
                >
                    id товара: {product.id}
                </p>
            )
        },
        price: {
            path: "product.price",
            component: (product) => (
                <p
                    className="d-flex flex-column sm-flex bd-highlight m-2 w-55 w-50"
                    // onClick={() => handleSort(product.price)}
                >
                    Стоимость: {product.price}
                </p>
            )
        },
        button: {
            component: (product) => (
                <button
                    className="btn btn-primary btn-sm text-nowrap"
                    type="button"
                    onClick={() => {
                        handleChange(product.id);
                    }}
                >
                    Открыть карточку
                </button>
            )
        }
    };

    return (
        <div className="d-flex flex-column w-75">
            <TableHeader {...{ onSort, selectedSort, columns }} />
            <TableBody {...{ columns, data: products }} />
            <ProductHeader
                {...{
                    columns,
                    handleChange,
                    ...rest
                }}
            />
            {/* {products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    handleChange={handleChange}
                    {...rest}
                />
            ))} */}
        </div>
    );
};

ProductsTable.propTypes = {
    products: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    handleSort: PropTypes.object
};

export default ProductsTable;
