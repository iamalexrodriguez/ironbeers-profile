import React from "react";
import { Switch, Route , Redirect} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Logout from "./components/Logout.jsx";
import Signup from "./components/Signup.jsx";
import Beers from "./components/Beers";
import DetailBeer from "./components/DetailBeer";
import Profile from "./components/Profile";
import DetailRandomBeer from "./components/DetailRandomBeer";
import NewBeer from "./components/NewBeer";
import ProfileEdit from "./components/ProfileEdit.jsx";

export default ({ isLogged, logIn , logOut, user}) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" render={(props=>isLogged?<Redirect to={'/'}/>:<Login {...props} logIn={logIn}/>)} />
    <Route path="/signup" component={Signup} />
    <Route exact path="/beers" component={Beers} />
    <Route exact path="/beers/random" component={DetailRandomBeer} />
    <Route exact path="/beers/new" component={NewBeer} />
    <Route path="/beers/:id" component={DetailBeer} />
    <Route exact path="/profile" render={(props => <Profile {...props} user={user} />)} />

    <Route path="/profile/edit" render={(props => <ProfileEdit {...props} user={user} />)} />


    <Route path="/logout" render={(props=>isLogged? <Logout {...props} logOut={logOut}/>: <Redirect to={'/'}/>)} />
    <Route
      component={() => {
        return <h2>Página no existe</h2>;
      }}
    />
  </Switch>
);
