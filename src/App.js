import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Store from "./Pages/Store/Store";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Order from "./Pages/Orders/Order";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/store">
            <Store></Store>
          </Route>
          <Route exact path="/order">
            <Order></Order>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
