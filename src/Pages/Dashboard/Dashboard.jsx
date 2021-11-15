import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import AddAdmin from "../../Components/Admin/AddAdmin";
import AdminRoute from "../../Components/Admin/AdminRoute";
import ManageOrders from "../../Components/Orders/ManageOrders";
import MyOrders from "../../Components/Orders/MyOrders";
import AddProudct from "../../Components/Products/AddProduct";
import ManageProducts from "../../Components/Products/ManageProducts";
import MyReviews from "../../Components/Reviews/MyReviews";
import useAuth from "../../Hooks/useAuth";
import './Dashboard.css'

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { isAdmin } = useAuth();

    return (
        <>
            <main>
                {console.log('is admin', isAdmin)}
                <div className="container mx-auto p-6">
                    <div className="grid grid-cols-12">
                        <div className="dashboard-navigation col-span-2">
                            {isAdmin || <>
                                <p><Link to={`${url}/my-orders`} >My Orders</Link></p>
                                <br />
                                <p><Link to={`${url}/my-reviews`} >My Reviews</Link></p>
                                <br />
                                <p><Link to={`${url}/pay`} >Pay</Link></p>
                                <br />
                            </>}
                            <br />
                            {
                                isAdmin && <>
                                    <p><Link to={`${url}/manage-orders`} >Manage Orders</Link></p>
                                    <br />
                                    <p><Link to={`${url}/manage-products`} >Mange Products</Link></p>
                                    <br />
                                    <p><Link to={`${url}/add-product`} >Add Product</Link></p>
                                    <br />
                                    <p><Link to={`${url}/add-admin`} >Add Admin</Link></p>
                                </>
                            }

                        </div>
                        <div className="col-span-9 dashboard-container mt-6 ml-6">

                            <Switch>
                                <Route exact path={path}>
                                    <h3 className='text-4xl text-yellow-800'>Welcome to the Dashboard</h3>
                                    <p>Naviagte using left side menu.</p>
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
                                <AdminRoute exact path={`${path}/manage-orders`}>
                                    <ManageOrders></ManageOrders>
                                </AdminRoute>
                                <AdminRoute exact path={`${path}/manage-products`}>
                                    <ManageProducts></ManageProducts>
                                </AdminRoute>
                                <AdminRoute exact path={`${path}/add-product`}>
                                    <AddProudct></AddProudct>
                                </AdminRoute>
                                <AdminRoute exact path={`${path}/add-admin`}>
                                    <AddAdmin></AddAdmin>
                                </AdminRoute>
                            </Switch>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;