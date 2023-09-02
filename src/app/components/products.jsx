import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import api from "../api";
import GroupList from "./groupList";
import ProductsHeader from "./productsHeader";
import ProductsTable from "./productsTable";
import _ from "lodash";

const Products = ({ products, handleChange, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const [sortBy, setSortBy] = useState({ iter: "price", order: "asc" });
    const count = products.length;
    const pageSize = 4;

    useEffect(() => {
        api.categories.fetchAll().then((data) => setCategories(data));
    }, []);

    const handleCagegorySelect = (item) => {
        setSelectedCategory(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    const sortedPriceProducts = _.orderBy(
        filteredProducts,
        [sortBy.path],
        [sortBy.order]
    );
    const productCrop = paginate(sortedPriceProducts, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedCategory();
    };

    return (
        <>
            <div className="container">
                <div className="header d-flex flex-column bd-highlight w-100">
                    <ProductsHeader />

                    <div className="d-flex ms-auto pt-2 w-100">
                        <div className="d-flex flex-column border m-2 p-2 flex-fill bd-highlight w-20">
                            {categories && (
                                <>
                                    <h5>Категории: </h5>
                                    <GroupList
                                        selectedItem={selectedCategory}
                                        items={categories}
                                        onItemSelect={handleCagegorySelect}
                                        valueProperty="id"
                                        contentProperty="name"
                                    />
                                    <span
                                        className={
                                            "badge bg-" +
                                            (products.length > 0
                                                ? "primary"
                                                : "denger")
                                        }
                                    >
                                        Number
                                    </span>
                                    <button
                                        className="btn btn-secondary mt-2"
                                        onClick={clearFilter}
                                    >
                                        Очистить фильтр
                                    </button>
                                </>
                            )}
                        </div>

                        {count > 0 && (
                            <ProductsTable
                                products={productCrop}
                                onSort={handleSort}
                                handleChange={handleChange}
                                selectedSort={sortBy}
                            />
                        )}
                    </div>
                </div>

                <div className="d-flex flex-row justify-content-center m-2 p-1">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    );
};

Products.propTypes = {
    handleChange: PropTypes.func.isRequired,
    products: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Products;
