import React from "react";

const ShowProduct = (props) => {
    const { title, price, _id, brand } = props.product;


    return (
        <>
            <div className='my-2 mx-1 border'>
                <div className="grid grid-cols-6">
                    <div className="col-span-3">{title}</div>
                    <div>{brand}</div>
                    <div>{price}</div>
                    <div>
                        <button
                            className='text-red-400'
                            onClick={() => props.removeProduct(_id)}
                        >Remove</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowProduct;