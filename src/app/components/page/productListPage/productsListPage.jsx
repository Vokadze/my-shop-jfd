import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import api from "../../../api";
import GroupList from "../../common/groupList";
import ProductsTable from "../../ui/productsTable";
import _ from "lodash";

const ProductsListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState();
    const [sortBy, setSortBy] = useState({ iter: "price", order: "asc" });
    // const count = products.length;
    const pageSize = 4;

    const [products, setProducts] = useState(api.products.fetchAll());

    console.log(api.products.fetchAll());

    const handleChange = (prodId) => {
        setProducts(products.filter((prod) => prod.id === prodId));
    };

    useEffect(() => {
        api.categories.fetchAll().then((data) => setCategories(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchQuery]);

    const handleCagegorySelect = (item) => {
        if (searchQuery !== "") setSearchQuery("");
        setSelectedCategory(item);
    };

    const handleSearchQuery = ({ target }) => {
        setSelectedCategory(undefined);
        setSearchQuery(target.value);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    const filteredProducts = searchQuery
        ? products.filter(
              (product) =>
                  product.title
                      .toLowerCase()
                      .indexOf(searchQuery.toLowerCase()) !== -1
          )
        : selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    const count = filteredProducts.length;

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
            <div className="header d-flex flex-column bd-highlight w-100">
                <input
                    type="text name"
                    name="searchQuery"
                    placeholder="Поисковая строка (по названию)"
                    className="m-2 border p-2 text-center"
                    onChange={handleSearchQuery}
                    value={searchQuery}
                />

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
                            onChange={handleChange}
                            title={products.title}
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
        </>
    );
};

ProductsListPage.propTypes = {
    handleChange: PropTypes.func,
    products: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default ProductsListPage;
