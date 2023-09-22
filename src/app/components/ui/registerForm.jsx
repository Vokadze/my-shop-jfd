import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import api from "../../api";
import SelectField from "../common/form/selectField";

const RegisterForm = () => {
    const [data, setData] = useState({ email: "", password: "", category: "" });
    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.categories.fetchAll().then((data) => setCategories(data));
    }, []);

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        console.log(target.name);
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязятельна для заполнения"
            },
            isEmail: {
                message: "Email введен некоррктно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязятелен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать, хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать, хотя бы одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        category: {
            isRequired: {
                message: "Обязательно выберите интересующую вас категорию продукции"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
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
    );
};

export default RegisterForm;
