export const categories = {
    electronics: { id: 1, name: "Электроника" },
    jewelery: { id: 2, name: "Ювилирные изделия" },
    men_clothing: { id: 3, name: "Мужская одежда" },
    women_clothing: { id: 4, name: "Женская одежда" },
    foldsack: { id: 5, name: "Рюкзак" }
};

// fetch("https://fakestoreapi.com/products/categories")
//         .then((res) => res.json())
//         .then((json) => console.log(json));

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categories);
        }, 2000);
    });

export default {
    fetchAll
};
