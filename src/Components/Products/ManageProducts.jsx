import React, { useEffect, useState } from "react";
import ShowProduct from "./ShowProduct";
// import './ManageProducts.css'

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const removeProduct = (productId) => {
        const isRemove = window.confirm('Are you sure that you want to remove the product from list?')
        if (!isRemove) {
            return;
        }
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                const newProducts = products.filter(product => product._id !== productId);
                setProducts(newProducts);
            })

    }

    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <>
            <div className="container mx-auto">
                <h2 class="text-xl text-gray-500 mb-6">Manage All Products</h2>
                <div className="grid gird-cols-1">
                    {
                        products.map(product => <ShowProduct
                            key={product._id}
                            product={product}
                            removeProduct={removeProduct}
                        ></ShowProduct>)
                    }
                </div>
            </div>
        </>
    );
};

export default ManageProducts;