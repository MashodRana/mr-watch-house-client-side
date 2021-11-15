import React from "react";
import { useState } from "react/cjs/react.development";
import useAuth from "../../Hooks/useAuth";
import "./MyReviews.css";

const MyReviews = () => {
  const { user } = useAuth();
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");

  const handleOnChange = (evnt) => {
    const field = evnt.target.name;
    const value = evnt.target.value;
    let newData = { ...data };
    newData[field] = value;
    setData(newData);
  };

  const submitReview = (evnt) => {
    setMessage("");
    evnt.preventDefault();
    let reviewData = { ...data };
    reviewData.name = user.displayName;
    reviewData.email = user.email;
    console.log("inside the submitReview of add review ", reviewData);
    const url = `https://hidden-shelf-04105.herokuapp.com/review`;
    fetch(url, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((resData) => {
        setMessage(resData.message);
        alert(resData.message);
      });
    setData({
      rating: "",
      review: "",
    });
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 text-gray-500">
          <div className="md:w-1/2 w-11/12 mx-auto md:px-10 md:pt-6" style={{backgroundColor:'rgba(146,68,170,0.2)'}}>
            <h2 className="text-lg mb-6">Give a review</h2>
            <form onSubmit={submitReview}>
              <div className='py-4'>
                <label className="mb-2" htmlFor="">
                  Name
                </label>
                <input
                  className="block focus:outline-none text-gray-700 b-bottom bg-transparent"
                  readOnly
                  type="text"
                  value={user.displayName}
                />
              </div>
              <div className='py-4'>
                <label className="" htmlFor="">
                  Ratings(1 - 5)
                </label>
                <input
                  className="block focus:outline-none text-gray-700 b-bottom bg-transparent focus:bg-gray-50"
                  type="number"
                  name="rating"
                  value={data.rating}
                  onChange={handleOnChange}
                />
              </div>
              <div className='py-4'>
                <label className="" htmlFor="">
                  Write your review
                </label>
                <textarea
                  required
                  onChange={handleOnChange}
                  className="block focus:outline-none text-gray-700 b-bottom bg-transparent focus:bg-gray-50"
                  type="text"
                  name="review"
                  id="review"
                  cols="30"
                  rows="5"
                  value={data.review}
                ></textarea>
              </div>
              <div className='my-3 flex justify-center'>
                <button className="p-2 rounded bgc1 opacity-50 hover:opacity-100 text-gray-200" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyReviews;
