import React, { useState, useEffect } from "react";
import GroupList from "./groupList";
import PropTypes from "prop-types";
import api from "../api";

const CategoriesList = () => {
    const [categories, setCategories] = useState();
    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
        api.categories.fetchAll().then((data) => setCategories(data));
    }, []);

    const handleCagegorySelect = (item) => {
        setSelectedCategory(item);
    };

    const clearFilter = () => {
        setSelectedCategory();
    };

    return (
        <>
            categories && (
            <GroupList
                selectedItem={selectedCategory}
                items={categories}
                onItemSelect={handleCagegorySelect}
                valueProperty="id"
                contentProperty="name"
            />
            <button className="btn btn-secondary mt-2" onClick={clearFilter}>
                Очистить фильтр
            </button>
            )
        </>
    );
};

CategoriesList.propTypes = {
    categories: PropTypes.array.isRequired
};

export default CategoriesList;
