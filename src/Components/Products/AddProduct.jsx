import React, { useState } from "react";
// import './AddProudct.css'

const AddProudct = () => {
    const [productData, setProductData] = useState({});
    const [message, setMessage] = useState('');

    const handleOnChange = (evnt) => {
        const field = evnt.target.name;
        const value = evnt.target.value;
        let newData = { ...productData };
        newData[field] = value;
        setProductData(newData);
    }
    const handleAddProductDataSubmit = (evnt) => {
        setMessage('');
        console.log('inside the handleOnChange of add product ', productData)
        evnt.preventDefault();
        const url = `http://localhost:5000/products/add-product`;
        fetch(url, {
            method: 'post',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(productData)
        }).then(res => res.json())
            .then(data => {
                setMessage(data.message);
                alert(data.message);
            })
        setProductData({
            title: '',
            brand: '',
            price: '',
            image: '',
            detail: ''
        })

    }
    return (
        <>
            <div className="container mx-auto">
                <h2 className="text-xl">Add a Product</h2>
                <form onSubmit={handleAddProductDataSubmit}>
                    <div className="grid grid-cols-1">
                        <div className="my-3">
                            <label className="mr-5 p-3" htmlFor="">Product Title</label>
                            <input
                                required
                                className="p-3 border"
                                type="text"
                                name="title"
                                id="title"
                                value={productData.title}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="my-3">
                            <label className="mr-5 p-3" htmlFor="">Product Brand</label>
                            <input
                                required
                                className="p-3 border"
                                type="text"
                                name="brand"
                                id="brand"
                                value={productData.brand}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="my-3">
                            <label className="mr-5 p-3" htmlFor="">Product Price($)</label>
                            <input required className="p-3 border" type="number" name="price" id="price" value={productData.price}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="my-3">
                            <label className="mr-5 p-3" htmlFor="">Product image url</label>
                            <input required className="p-3 border" type="text" name="image" id="image" value={productData.image}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="my-3">
                            <label className="mr-5 p-3" htmlFor="">Product detail</label>
                            <textarea required
                                onChange={handleOnChange}
                                className="p-3 border" type="text" name="detail" id="detail" cols="30" rows="10"
                            ></textarea>
                        </div>
                        <div className="my-3">
                            <p><button type='submit' className="px-5 py-2 border" >Add</button></p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProudct;