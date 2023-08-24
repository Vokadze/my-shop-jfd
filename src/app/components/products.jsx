import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import Product from "./product";
import api from "../api";
import GroupList from "./groupList";

const Products = ({ products: allProducts, handleChange, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState();
    const [selectedCategory, setSelectedCategory] = useState();
    const count = allProducts.length;
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

    const filteredProducts = selectedCategory
        ? allProducts.filter((product) => product.category === selectedCategory)
        : allProducts;
    const productCrop = paginate(filteredProducts, currentPage, pageSize);

    const clearFilter = () => {
        setSelectedCategory();
    };

    return (
        <>
            <div className="container">
                {count > 0 && (
                    <div className="header d-flex flex-column bd-highlight w-100">
                        <div className="header-title d-flex flex-row justify-content-center m-2 border p-2">
                            Шапка-меню
                        </div>
                        <div className="header-title d-flex flex-row justify-content-center m-2 border p-2">
                            Поисковая строка (по названию)
                        </div>

                        <div className="d-flex ms-auto pt-2 w-100">
                            <div className="d-flex flex-column border m-2 p-2 flex-fill bd-highlight w-20">
                                <h5>Категории: </h5>
                                {categories && (
                                    <>
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
                                                (allProducts.length > 0
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
                            <div className="d-flex flex-column w-75">
                                <div className="d-flex border justify-content-center m-2 mt-3 p-2">
                                    <span>
                                        Функции сортировки (по стоимости)
                                    </span>
                                </div>
                                {productCrop.map((product) => (
                                    <Product
                                        key={product.id}
                                        product={product}
                                        handleChange={handleChange}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
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
