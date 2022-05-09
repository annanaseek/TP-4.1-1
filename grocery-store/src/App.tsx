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
          <Route path="/productCatalog/slug">
            <Slug />
          </Route>
          <Route path="/productCatalog/product/slug">
            <SlugProduct />
          </Route>
          <Route path="/basket/Basket">
            <Basket />
          </Route>
          <Route path="/order/Order">
            <Order />
          </Route>
          <Route path="/order/IntervalDelivery">
            <IntervalDelivery />
          </Route>
          <Route path="/authorization/Authorization">
            <Authorization />
          </Route>
          <Route path="/registration/Registration">
            <Registration />
          </Route>
          <Route path="/clientPA/orders/order_products/OrderProducts">
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
          <Route path="/clientPA/orderHistory/orderHistory_order/OrderProducts">
            <OrderProductHistory />
          </Route>
          <Route path="/admin/products">
            <Admin />
          </Route>
          <Route path="/admin/users">
            <Admin />
          </Route>
          <Route path="/admin/orderHistory">
            <Admin />
          </Route>
          <Route path="/admin/addCategory">
            <AddCategory />
          </Route>
          <Route path="/courier/profile">
            <Courier />
          </Route>
          <Route path="/courier/orders">
            <Courier />
          </Route>
          <Route path="/courier/orderHistory">
            <Courier />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
