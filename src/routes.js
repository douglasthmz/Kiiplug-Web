import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Product from './pages/Product';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product" component={Product} />
    </Switch>
  );
}
