import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
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
        <section class="featured-products my-3">
          <div class="grid grid-cols-3 g-4">
            <div class="border">
              <div className="text-center">
                <img
                  style={{ height: "200px", width: "200px" }}
                  src="https://image.freepik.com/free-vector/realistic-clock-watch-stainless-steel-black-face-luxury_33869-1352.jpg"
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-lg">Product title</h4>
                <p>Product Price: $6</p>
                <p>
                  <Link to='/order'><button className="px-5 py-3 m-4 border"
                  
                  >Buy</button></Link>
                </p>
              </div>
            </div>
          </div>
          <div>
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
