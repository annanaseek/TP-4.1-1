import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Slug from './pages/productCatalog/slug'
import SlugProduct from './pages/productCatalog/product/slug'
import Basket from './pages/basket/Basket';
import Order from './pages/order/Order';
import IntervalDelivery from './pages/order/IntervalDelivery';
import Authorization from './pages/authorization/Authorization';
import Registration from './pages/registration/Registration';
import OrderProducts from './pages/clientPA/order_products/OrderProducts';
import OrderProductHistory from './pages/clientPA/orderHistory_order/OrderProducts';
import AddCategory from './pages/admin/addCategory/AddCategory';
import React, { Component } from 'react';
import ClientPA from './pages/clientPA/ClientPA';
import Admin from './pages/admin/Admin';
import Courier from './pages/courier/Courier';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/product-catalog/slug">
            <Slug />
          </Route>
          <Route path="/product-catalog/product/slug">
            <SlugProduct />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/order/interval-delivery">
            <IntervalDelivery />
          </Route>
          <Route path="/authorization">
            <Authorization />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/clientPA/orders/order_products/order-products">
            <OrderProducts />
          </Route>
          <Route path="/clientPA/profile">
            <ClientPA />
          </Route>
          <Route path="/clientPA/orders">
            <ClientPA />
          </Route>
          <Route path="/clientPA/profile">
            <ClientPA />
          </Route>
          <Route path="/clientPA/orderHistory">
            <ClientPA />
          </Route>
          <Route path="/clientPA/orderHistory/order-history_order/order-products">
            <OrderProductHistory />
          </Route>
          <Route path="/admin/products">
            <Admin />
          </Route>
          <Route path="/admin/users">
            <Admin />
          </Route>
          <Route path="/admin/order-history">
            <Admin />
          </Route>
          <Route path="/admin/add-category">
            <AddCategory />
          </Route>
          <Route path="/courier/profile">
            <Courier />
          </Route>
          <Route path="/courier/orders">
            <Courier />
          </Route>
          <Route path="/courier/order-history">
            <Courier />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
