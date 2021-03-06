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
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Aboutus from "./Pages/About/Aboutus";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
          <PrivateRoute exact path="/order/:productId">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          <Route exact path="/about">
            <Aboutus></Aboutus>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
