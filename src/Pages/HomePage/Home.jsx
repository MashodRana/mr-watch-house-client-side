import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/Cards/ProductCard";
import ReviewCard from "../../Components/Reviews/ReviewCard";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = "https://hidden-shelf-04105.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 6))
        setNewProducts(data.slice(-3))
      });
  }, []);

  useEffect(() => {
    const url = "https://hidden-shelf-04105.herokuapp.com/reviews";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <main>
        <section class="intro-section">
          <div className="grid md:grid-cols-2 gird-cols-1">
            <div className='flex justify-center items-center'>
              <div>
                <h4 className="text-lg text-black">Welcome to <span className='font-bold'>MR WATCH HOUSE</span></h4>
                <br />
                <h2 className="text-3xl text-yellow-800">
                  GET THE BEST VERSION <br /> OF YOUR LOOK STYLE
                </h2>
                <br />
                <Link to='/store' className="text-center opacity-75 hover:opacity-100 bgc1 px-4 py-2 mt-10 rounded text-gray-200">Shop Now</Link>
              </div>
            </div>
            <div >
              <div className="flex justify-center">
                <img src="https://image.freepik.com/free-vector/men-s-leather-wrist-watch-vector-hand-drawn-fashion-sketch_53876-143477.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container px-5 py-24 mx-auto">
            <h1 className="text-2xl font-bold text-center text-yellow-800">Popular Products</h1>
            <p className='mb-12 text-center text-gray-500'>These products are frequently liked by people</p>
            <div class="flex flex-wrap -m-4">
              {products.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
            </div>
            <div class=" flex justify-center mt-6">
              <Link to="/store" className="text-normal tc1 border px-4 border-purple-500 rounded">
                See More <i class="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
        </section>

        <section class="new-products-section">
          <div class="container px-5 pt-12 pb-24 mx-auto">
            <div className='mb-10'>
              <h1 className="text-2xl font-bold text-center text-yellow-800">New Arrivals</h1>
              <p className='text-gray-500 text-center'>Checkout our lates products</p>            </div>
            <div class="flex flex-wrap -m-4">
              {newProducts.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
            </div>
          </div>
        </section>
        <section class="review-section">
          <div class="container px-5 py-24 mx-auto">
            <h1 class="text-3xl font-medium title-font text-yellow-800 text-center">People Comments</h1>
            <p className='mb-12 text-center text-gray-500'>We respect our client opinions</p>
            <div class="text-gray-600 flex flex-wrap -m-4">
              {
                reviews.map(review => <ReviewCard
                  key={review._id}
                  review={review}
                ></ReviewCard>)
              }
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
