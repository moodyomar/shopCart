import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NavBar from "./mainComps/navBar"
import Home from "./mainComps/home"
import shopApp from "./shop/shopApp";
import shopCart from "./shop/shopCart";
import Footer from "./mainComps/footer";


function App() {
  return (

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

  );
}

export default App;
