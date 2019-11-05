import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';
import './app.scss';

const App = () => (
  <main role="main" className="container">
    <ShopHeader numItems={5} total={210} />
    <Switch>
      <Route
        path="/"
        component={HomePage}
        exact
      />
      <Route
        path="/cart"
        component={CartPage}
        exact
      />
    </Switch>
  </main>
);

export default App;
