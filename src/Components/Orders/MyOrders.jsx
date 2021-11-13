import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import './MyOrders.css'

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/orders/?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [])

    return (
        <>
            <div>
                <h3 className="text-xl">You have placed {myOrders.length} orders.</h3>
            </div>
        </>
    );
};

export default MyOrders;