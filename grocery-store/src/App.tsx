import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Catalog from './pages/Catalog';
import Slug from './pages/productCatalog/slug'
import SlugProduct from './pages/productCatalog/product/slug'
import Basket from './pages/basket/Basket';
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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
