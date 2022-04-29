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
import Profile from './pages/clientPA/profile/Profile';
import Orders from './pages/clientPA/orders/Orders'
import OrderProducts from './pages/clientPA/orders/order_products/OrderProducts';
import OrderHistory from './pages/clientPA/orderHistory/OrderHistory';
import OrderProductHistory from './pages/clientPA/orderHistory/orderHistory_order/OrderProducts';
import OrderHistoryAdmin from './pages/admin/orderHistory/OrderHistory';
import ProductsAdmin from './pages/admin/products/Products';
import AddCategory from './pages/admin/addCategory/AddCategory';
import React, { Component } from 'react';

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
          <Route path="/clientPA/profile/Profile">
            <Profile />
          </Route>
          <Route path="/clientPA/orders/Orders">
            <Orders />
          </Route>
          <Route path="/clientPA/orders/order_products/OrderProducts">
            <OrderProducts />
          </Route>
          <Route path="/clientPA/orderHistory/OrderHistory">
            <OrderHistory />
          </Route>
          <Route path="/clientPA/orderHistory/orderHistory_order/OrderProducts">
            <OrderProductHistory />
          </Route>
          <Route path="/admin/orderHistory/OrderHistory">
            <OrderHistoryAdmin />
          </Route>
          <Route path="/admin/products/Products">
            <ProductsAdmin />
          </Route>
          <Route path="/admin/addCategory/AddCategory">
            <AddCategory />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
