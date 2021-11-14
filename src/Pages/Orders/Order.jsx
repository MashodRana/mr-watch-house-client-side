import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import './Order.css'

const Order = () => {
  const { user } = useAuth();
  const [orderData, setOrderData] = useState({});
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const handleOnChange = (evnt) => {
    const field = evnt.target.name;
    const value = evnt.target.value;
    const newData = { ...orderData };
    newData[field] = value;
    setOrderData(newData);
  };
  const handleOrderDataSubmit = (evnt) => {
    let data = orderData;
    data.email = user.email;
    data.name = user.displayName;
    data.title = product.title;
    data.price = product.price;
    data.productId = product._id
    console.log('printing orderdata:: ', data)
    fetch("http://localhost:5000/order", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message)
      });
    setOrderData({
      phone: '',
      address: '',
      city: ''
    })
    evnt.preventDefault();
  };
  useEffect(() => {
    const url = `http://localhost:5000/products/${productId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [])
  return (
    <>
      <main>
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img alt="ecommerce" class="md:w-1/2 w-full h-96 object-cover object-center rounded" src={product.image} />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>

                <p class="leading-relaxed">{product.details}</p>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-yellow-800">Price : ${product.price}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="order-form pb-12">
          <div className="container mx-auto">
            <div className='mb-12'>
              <h1 className="text-2xl text-center text-yellow-800">
                Confirm your order
              </h1>
              <p class="mt-1 text-sm text-gray-600 text-center">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div class="mt-5 md:mt-0 md:w-1/2 mx-auto w-11/12" >
              <form onSubmit={handleOrderDataSubmit}>
                <div class="shadow overflow-hidden sm:rounded-md">
                  <div class="px-4 py-5 bg-white sm:p-6" style={{ backgroundColor: '#e5e7eb' }}>
                    <div class="grid grid-cols-6 gap-6">
                      <div class="col-span-6">
                        <label
                          for="first_name"
                          class="block text-lg font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autocomplete="given-name"
                          class="mt-1 text-gray-500 focus:outline-none bg-transparent"
                          readOnly
                          value={user.displayName}
                        // onChange={handleOnChange}
                        />
                      </div>

                      <div class="col-span-6">
                        <label
                          for="email_address"
                          class="block text-lg font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          autocomplete="email"
                          class="mt-1 text-gray-500 focus:outline-none bg-transparent"
                          value={user.email}
                          readOnly
                        />
                      </div>
                      <div class="col-span-6">
                        <label
                          for="email_address"
                          class="block text-lg font-medium text-gray-700"
                        >
                          Phone
                        </label>
                        <input
                          required
                          type="number"
                          name="phone"
                          id="phone"
                          class="mt-1 text-gray-500 block md:w-1/2 w-11/12 focus:bg-gray-100 border-b-2 border-purple-400 focus:outline-none bg-transparent"
                          onChange={handleOnChange}
                          value={orderData.phone}
                        />
                      </div>

                      <div class="col-span-6">
                        <label
                          for="street_address"
                          class="block text-lg font-medium text-gray-700"
                        >
                          Address
                        </label>
                        <input
                          required
                          type="text"
                          name="address"
                          id="address"
                          autocomplete="address"
                          class="mt-1 text-gray-500 block md:w-1/2 w-11/12 focus:bg-gray-100 border-b-2 border-purple-400 focus:outline-none bg-transparent"
                          onChange={handleOnChange}
                          value={orderData.address}
                        />
                      </div>

                      <div class="col-span-6">
                        <label
                          for="city"
                          class="block text-lg font-medium text-gray-700"
                        >
                          City
                        </label>
                        <input
                          required
                          type="text"
                          name="city"
                          id="city"
                          class="mt-1 text-gray-500 focus:bg-gray-100 block md:w-1/2 w-11/12 border-b-2 border-purple-400 focus:outline-none outline-0 bg-transparent"
                          onChange={handleOnChange}
                          value={orderData.city}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="py-3 bg-gray-100 text-center">
                    <button
                      type="submit"
                      class="py-2 px-10 bgc1 rounded text-gray-200 hover:bg-yellow-800"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Order;
