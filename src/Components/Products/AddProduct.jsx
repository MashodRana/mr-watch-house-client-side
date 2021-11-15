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
        const url = `https://hidden-shelf-04105.herokuapp.com/products/add-product`;
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

                <form onSubmit={handleAddProductDataSubmit}>

                    <div className=" text-gray-500 grid grid-cols-1 md:px-6 py-4 md:w-3/4 w-11/12 mx-auto" style={{ backgroundColor: 'rgba(146,68,170,0.2)' }}>
                        <h2 className="text-xl mb-6 text-gray-700">Add a Product</h2>
                        <div className="my-3">
                            <label htmlFor="">Product Title</label>
                            <input
                                required
                                className="block text-gray-700 focus:outline-none b-bottom bg-transparent focus:bg-gray-200"
                                type="text"
                                name="title"
                                id="title"
                                value={productData.title}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="">Product Brand</label>
                            <input
                                required
                                className="block text-gray-700 focus:outline-none b-bottom bg-transparent focus:bg-gray-200"
                                type="text"
                                name="brand"
                                id="brand"
                                value={productData.brand}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="my-3">
                            <label  htmlFor="">Product Price($)</label>
                            <input required className="block text-gray-700 focus:outline-none b-bottom bg-transparent focus:bg-gray-200" type="number" name="price" id="price" value={productData.price}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="">Product image url</label>
                            <input required className="block text-gray-700 focus:outline-none b-bottom bg-transparent focus:bg-gray-200" type="text" name="image" id="image" value={productData.image}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="">Product detail</label>
                            <textarea required
                                onChange={handleOnChange}
                                className="block text-gray-700 focus:outline-none b-bottom bg-transparent focus:bg-gray-200" type="text" name="detail" id="detail" cols="30" rows="6"
                            ></textarea>
                        </div>
                        <div className="my-3 flex justify-center">
                            <p><button type='submit' className="px-5 py-1 bgc1 text-gray-200 rounded" >Add</button></p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProudct;