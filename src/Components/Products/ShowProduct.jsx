import React from "react";

const ShowProduct = (props) => {
  const { title, price, _id, brand } = props.product;

  return (
    <>
      <div
        className="my-2 mx-1 md:w-11/12 rounded px-2 py-2"
        style={{ border: "1px solid rgba(146,68,170, 0.5)" }}
      >
        <div className="grid grid-cols-6 text-gray-500">
          <div className="col-span-3">
            <h5 className="text-md">{title}</h5>
          </div>
          <div>
            <p>{brand}</p>
          </div>
          <div>
            <p>${price}</p>
          </div>
          <div>
            <button
              className="text-red-400 py-0.5 px-3 border rounded-full border-red-500 hover:bg-red-500 hover:text-gray-200"
              onClick={() => props.removeProduct(_id)}
            >
              <i class="fas fa-trash-alt"></i> Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
