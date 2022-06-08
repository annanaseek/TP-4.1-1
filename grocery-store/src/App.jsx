import { BrowserRouter, Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Products_catalog from './pages/productCatalog/Products_catalog'
import ProductsCatalogFilter from './pages/productCatalog/productCatalog_filter/ProductsCatalogFilter';
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
import SearchProducts from './components/searchProducts/SearchProducts'

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/catalog/:id/:id">
              <ProductsCatalogFilter />
          </Route>
          <Route path="/catalog/:id">
              <Products_catalog />
          </Route>
          <Route path="/catalog" exact>
            <Catalog />
          </Route>
          <Route path="/search_product">
            <SearchProducts />
          </Route>
          {/* <Route path="/catalog/:id">
            <TEST />
          </Route> */}
          {/* <Route path="/product-catalog/slug">
            <Slug />
          </Route> */}
          <Route path="/product-catalog/product/slug">
            <SlugProduct />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/order_interval-delivery">
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

function TEST() {
  let { id } = useParams()

  return id
}

export default App;
