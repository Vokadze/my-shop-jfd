import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductCardList from "./productCardList";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

const ProductsPage = ({ products, handleChange }) => {
  const count = products.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    console.log("page ", pageIndex);
    setCurrentPage(pageIndex);
  };

  // const productCrop = paginate(products, currentPage, pageSize);
  const productCrop = paginate(products, currentPage, pageSize);

  return (
    <>
      {count > 0 && (
        <div className="container w-800px">
          <div className="header d-flex flex-column bd-highlight">
            <div className="header-title d-flex flex-row justify-content-center m-2 border p-2">
              Шапка-меню
            </div>
            <div className="header-title d-flex flex-row justify-content-center m-2 border p-2">
              Поисковая строка (по названию)
            </div>

            <div className="d-flex ms-auto pt-2 w-100">
              <div className="d-flex border m-2 p-2 flex-fill bd-highlight">
                <div>Категории</div>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex border justify-content-center m-2 mt-3 p-2">
                  <span>Функции сортировки</span>
                </div>
                {productCrop.map((product) => (
                  <ProductCardList
                    key={product.id}
                    product={product}
                    handleChange={handleChange}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

ProductsPage.propTypes = {
  handleChange: PropTypes.func.isRequired,
  products: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default ProductsPage;
