import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import "./MyOrders.css";
import ShowOrder from "./ShowOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const [message, setMessage] = useState("");

  const cancelOrder = (orderId) => {
    console.log("inside Cancel Order ", orderId);
    try {
      const url = `https://hidden-shelf-04105.herokuapp.com/order/`;
      fetch(url, {
        method: "delete",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ orderId: orderId }),
      })
        .then((res) => res.json())
        .then((data) => {
          const newOrders = myOrders.filter((order) => order._id !== orderId);
          setMyOrders(newOrders);
          setMessage(data.message);
          alert(message);
        });
    } catch (error) {
      console.log("Error in canceling order: ", error);
    }
  };

  useEffect(() => {
    const url = `https://hidden-shelf-04105.herokuapp.com/orders/?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  return (
    <>
      <h2 className="text-xl text-gray-700 mb-6">
        All orders that you have placed.
      </h2>
      <div>
        <h3 className="text-lg text-gray-500 ">You have placed {myOrders.length} orders.</h3>
        <div className="grid grid-cols-1">
          {myOrders.map((order) => (
            <ShowOrder
              key={order._id}
              order={order}
              cancelOrder={cancelOrder}
            ></ShowOrder>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
