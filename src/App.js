import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import 'semantic-ui-css/components/reset.min.css';
import 'semantic-ui-css/components/site.min.css';
import 'semantic-ui-css/components/container.min.css';
import 'semantic-ui-css/components/icon.min.css';
import 'semantic-ui-css/components/message.min.css';
import 'semantic-ui-css/components/header.min.css';

import { SemanticToastContainer } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import CategoryView from "./pages/Category/CategoryView";
import {Container} from "semantic-ui-react";
import Footer from "./components/Footer";
import ShoppingCartView from "./pages/ShoppingCart/ShoppingCartView";
import CheckoutView from "./pages/Checkout/CheckoutView";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

if (!localStorage.getItem("cart")) {
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
}

const AppRouter = () => {
  return (
    <Router>
        <SemanticToastContainer />
        <Navbar />
        <Container style={{height: "auto", minHeight: "51vh", marginTop: '10em'}}>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/shop-and-shop">
                        <Home />
                    </Route>
                    <Route path="/categories/:category_name/:item_id?">
                        <CategoryView />
                    </Route>
                    <Route path="/shopping_cart">
                        <ShoppingCartView />
                    </Route>
                    <Route path="/checkout">
                        <CheckoutView />
                    </Route>
                </Switch>
            </div>
        </Container>
        <Footer />
    </Router>
  )
}

export default function App() {
  return (
    <AppRouter />
  );
}