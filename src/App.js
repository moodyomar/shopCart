import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { shopReducer } from './redux/reducers/shopReducer';
import NavBar from "./mainComps/navBar"
import Home from "./mainComps/home"
import shopApp from "./shop/shopApp";
import shopCart from "./shop/shopCart";
import Footer from "./mainComps/footer";

// let reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__() ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
const shopStore = createStore(shopReducer)

function App() {
  return (
<Provider store={shopStore}>
    <Router>
      <div className="App">
        <header>
          <Route path="/" component={NavBar} />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={shopApp} />
            <Route path="/cart" component={shopCart} />
          </Switch>
        </main>
        
        <footer >
          <Footer />
        </footer>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
