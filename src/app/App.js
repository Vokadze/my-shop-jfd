import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Products from "./layouts/products";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/navBar";
// import ProductPage from "./components/productPage";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                {/* <Route path="/products/:prodId?" component={ProductPage} /> */}
                <Route path="/products/:prodId?" component={Products} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

export default App;
