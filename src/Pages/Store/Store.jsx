import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/Cards/ProductCard";
import './Store.css'

const Store = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = "https://hidden-shelf-04105.herokuapp.com/products";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <main>
            <div className="container mx-auto">
                <section class="py-24 text-gray-600 body-font">
                    <h2 className="mb-12 text-4xl text-center text-yellow-800">Explore our all Products</h2>
                    <div class="container px-5 mx-auto">
                        <div class="flex flex-wrap -m-4">
                            {products.map((product) => (
                                <ProductCard key={product._id} product={product}></ProductCard>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Store;