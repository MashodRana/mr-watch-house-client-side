import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/Cards/ProductCard";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <main>
        <section class="intro-section">
          <h4 className="text-lg text-gray-50">Welcome MR Watch House</h4>
          <h2 className="text-3xl text-gray-200">
            GET THE BEST VERSION OF YOUR LOOK STYLE
          </h2>
          <p className="text-normal text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            sint libero cumque itaque soluta nostrum reprehenderit? Vel
            repellendus mollitia eos rerum culpa ab hic, ratione minima, eaque
            tenetur, atque nulla.
          </p>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
              {products.map((product) => (
                <ProductCard key={product._id} product={product}></ProductCard>
              ))}
            </div>
          </div>
          <div class="container px-5 py-24 mx-auto">
            <Link to="/store" className="text-lg">
              See More
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
