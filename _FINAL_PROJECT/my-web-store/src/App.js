import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import UserAccount from './UserAccount';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <div>
      <Navigation />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route path="/user-account" component={UserAccount} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
