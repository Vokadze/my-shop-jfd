import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
// import PropTypes from "prop-types";
// import { validator } from "../../../utils/validator";
import Product from "../../table/product";

// import TextField from "../../common/form/textField";
// import SelectField from "../../common/form/selectField";
import api from "../../../api";
// import Product from "../../table/product";

const EditProductPage = () => {
    const { prodId } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});
    // const [categories, setCategories] = useState([]);
    // const [errors, setErrors] = useState({});

    // const getCategoriesById = (id) => {
    //     for (const categ in categories) {
    //         const categData = categories[categ];
    //         if (categData.id === id) return categData;
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const isValid = validate();
        // if (!isValid) return;
        // const { category } = data;
        api.products
            .update(prodId, {
                ...data
                // category: getCategoriesById(category)
            })
            .then((data) => history.push(`/products/${data.id}`));
        console.log(data);
    };

    useEffect(() => {
        setIsLoading(true);
        api.products.getById(prodId).then(({ category, ...data }) =>
            setData((prevState) => ({
                ...prevState,
                ...data,
                category: category.id
            }))
        );
        // api.categories.fetchAll().then((data) => setCategories(data));
    }, []);

    useEffect(() => {
        if (data.id) setIsLoading(false);
    }, [data]);

    // const validatorConfig = {
    //     email: {
    //         isRequired: {
    //             message: "Электронная почта обязятельна для заполнения"
    //         },
    //         isEmail: {
    //             message: "Email введен некоррктно"
    //         }
    //     },
    //     name: {
    //         isRequired: {
    //             message: "Введите ваше имя"
    //         }
    //     }
    // };

    // useEffect(() => validate(), [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        console.log(target.name);
    };

    // const validate = () => {
    //     const errors = validator(data, validatorConfig);
    //     setErrors(errors);
    //     return Object.keys(errors).length === 0;
    // };

    // const isValid = Object.keys(errors).length === 0;

    return (
        // <h1>Edit Page</h1>
        // <Product />
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading && Object.keys(data).length > 0 ? (
                        <Product
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            // data={data}
                            image={data.image}
                            title={data.title}
                            id={data.id}
                            price={data.price}
                        />
                    ) : (
                        "Loading..."
                    )}
                    {/* {!isLoading && Object.keys(categories).length > 0 ? (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <TextField
                                label="Пароль"
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                error={errors.password}
                            />

                            <SelectField
                                label="Выберите интересующую вас категорию продукции"
                                defaultOption="Choose..."
                                name="categories"
                                options={categories}
                                onChange={handleChange}
                                value={data.category}
                                error={errors.category}
                            />

                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Submit
                            </button>
                        </form>
                    ) : (
                        "Loading..."
                    )} */}
                </div>
            </div>
        </div>
    );
};

// EditProductPage.propTypes = {
//     image: PropTypes.string,
//     title: PropTypes.string,
//     id: PropTypes.number,
//     price: PropTypes.number
//     // products: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
// };

export default EditProductPage;
