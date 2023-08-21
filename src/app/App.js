import React, { useState } from "react";
import api from "./api";
import ProductsPage from "./components/productsPage";

function App() {
    const [products, setProducts] = useState(api.products.fetchAll());

    console.log(api.products.fetchAll());

    const handleChange = (prodId) => {
        setProducts(products.filter((prod) => prod.id === prodId));
    };

    return <ProductsPage products={products} handleChange={handleChange} />;
}

export default App;
