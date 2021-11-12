import React, { useEffect, useState } from "react";
import ProductCard from "../../Components/Cards/ProductCard";
import './Store.css'

const Store = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = "http://localhost:5000/products";
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <main>
            <div className="container mx-auto">
                <h2 className="text-4xl text-center">Explore our all Products</h2>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
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