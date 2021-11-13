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
    data.title= product.title;
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
              <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.image} />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">{product.brand}</h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>

                <p class="leading-relaxed">{product.details}</p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div class="flex">
                    <span class="mr-3">Color</span>
                    <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div class="flex ml-6 items-center">
                    <span class="mr-3">Size</span>
                    <div class="relative">
                      <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">${product.price}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="order-form">
          <h1 className="text-2xl">
            Provide your information to confirm your order.
          </h1>
          <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                  </h3>
                  <p class="mt-1 text-sm text-gray-600">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
              </div>
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleOrderDataSubmit}>
                  <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label
                            for="first_name"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            autocomplete="given-name"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            readOnly
                            value={user.displayName}
                          // onChange={handleOnChange}
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="email_address"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            autocomplete="email"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            value={user.email}
                            readOnly
                          />
                        </div>
                        <div class="col-span-6 sm:col-span-4">
                          <label
                            for="email_address"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Phone
                          </label>
                          <input
                            required
                            type="number"
                            name="phone"
                            id="phone"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleOnChange}
                            value={orderData.phone}
                          />
                        </div>

                        <div class="col-span-6">
                          <label
                            for="street_address"
                            class="block text-sm font-medium text-gray-700"
                          >
                            Address
                          </label>
                          <input
                            required
                            type="text"
                            name="address"
                            id="address"
                            autocomplete="address"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleOnChange}
                            value={orderData.address}
                          />
                        </div>

                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            for="city"
                            class="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <input
                            required
                            type="text"
                            name="city"
                            id="city"
                            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            onChange={handleOnChange}
                            value={orderData.city}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Order;
