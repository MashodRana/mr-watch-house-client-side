import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import MyOrders from "../../Components/Orders/MyOrders";
import MyReviews from "../../Components/Reviews/MyReviews";
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch()
    return (
        <>
            <main>
                <div className="container mx-auto p-6 border">
                    <div className="grid grid-cols-12 gap-1">
                        <div className="dashboard-navigation border">
                            <p><Link to={`${url}/my-orders`} >My Orders</Link></p>
                            <br />
                            <p><Link to={`${url}/my-reviews`} >My Reviews</Link></p>
                            <br />
                            <p><Link to={`${url}/pay`} >Pay</Link></p>

                        </div>
                        <div className="col-span-11 border">

                            <Switch>
                                <Route exact path={path}>
                                    <h3>Please select a topic.</h3>
                                </Route>
                                <Route exact path={`${path}/my-orders`}>
                                    <MyOrders></MyOrders>
                                </Route>
                                <Route exact path={`${path}/my-reviews`}>
                                    <MyReviews></MyReviews>
                                </Route>
                                <Route exact path={`${path}/pay`}>
                                    <h2 className="text-4xl">Payment system comming soon....</h2>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;