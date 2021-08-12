import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./Home.jsx";
import Weekly from "./Weekly.jsx";
import WeeklyBattle from "./WeeklyBattle.jsx";
import Popular from "./Popular.jsx";
import PopularBattle from "./PopularBattle.jsx";
import Favorites from "./Favorites.jsx";


class App extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav " className="ul">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/weekly-battle">Weekly Battle</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/weekly">Weekly</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/popular">Popular</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/popular-battle">Popular Battle</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/favorites">Favorites</Link></li>
            
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weekly-battle" component={WeeklyBattle} />
          <Route path="/weekly" component={Weekly} />
          <Route path="/popular" component={Popular} />
          <Route path="/popular-battle" component={PopularBattle} />
          <Route path="/favorites" component={Favorites} />
          
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App;
