import React, { useEffect, useState } from "react";
import ShowOrder from "./ShowOrder";

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [message, setMessage] = useState('');

    const shipOrder = (orderId, _idx) => {
        console.log('inside Ship Order ', orderId)
        setMessage('');
        try {
            const url = `https://hidden-shelf-04105.herokuapp.com/orders/${orderId}`;
            fetch(url, {
                method: 'put',
            }).then(res => res.json())
                .then(data => {
                    let newOrders = [...orders];
                    newOrders[_idx].status = 'shipped'
                    setOrders(newOrders);
                    setMessage(data.message);
                    alert(data.message)
                })

        }
        catch (error) {
            console.log('Error in canceling order: ', error);
        }
    }
    const cancelOrder = (orderId) => {
        console.log('inside Cancel Order ', orderId)
        setMessage('');
        try {
            const url = `https://hidden-shelf-04105.herokuapp.com/order/`;
            fetch(url, {
                method: 'delete',
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ orderId: orderId })
            }).then(res => res.json())
                .then(data => {
                    const newOrders = orders.filter(order => order._id !== orderId)
                    setOrders(newOrders);
                    setMessage(data.message);
                    alert(data.message)
                })

        }
        catch (error) {
            console.log('Error in canceling order: ', error);
        }
    }

    useEffect(() => {
        const url = `https://hidden-shelf-04105.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])


    return (
        <>
            <div className="container mx-auto">
                <h2 className="text-2xl">All orders</h2>
                <div className="grid grid-cols-1">
                    {orders.map((order, _idx) => <ShowOrder
                        key={order._id}
                        idx={_idx}
                        order={order}
                        shipOrder={shipOrder}
                        cancelOrder={cancelOrder}
                    ></ShowOrder>)}
                </div>
            </div>
        </>
    );
};

export default ManageOrders;