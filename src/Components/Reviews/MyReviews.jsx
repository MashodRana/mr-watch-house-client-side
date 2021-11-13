import React from "react";
import { useState } from "react/cjs/react.development";
import useAuth from "../../Hooks/useAuth";
import './MyReviews.css'

const MyReviews = () => {
    const { user } = useAuth();
    const [data, setData] = useState({});
    const [message, setMessage] = useState('');

    const handleOnChange = (evnt) => {
        const field = evnt.target.name;
        const value = evnt.target.value;
        let newData = { ...data };
        newData[field] = value;
        setData(newData);
    }


    const submitReview = (evnt) => {
        setMessage('');
        evnt.preventDefault();
        let reviewData = { ...data };
        reviewData.name = user.displayName;
        reviewData.email = user.email;
        console.log('inside the submitReview of add review ', reviewData)
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'post',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reviewData)
        }).then(res => res.json())
            .then(resData => {
                setMessage(resData.message);
                alert(resData.message);
            })
        setData({
            rating: '',
            review: '',
        })

    }

    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <h2>Give a review..</h2>
                    <form onSubmit={submitReview}>
                        <div>
                            <label className="mr-4" htmlFor="">Name</label>
                            <input className="border" readOnly type="text" value={user.displayName} />
                        </div>
                        <div>
                            <label className="mr-4" htmlFor="">Ratings(1 - 5)</label>
                            <input
                                className="border"
                                type="number"
                                name="rating"
                                value={data.rating}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div>
                            <label className="mr-4" htmlFor="">Write your review</label>
                            <textarea
                                required
                                onChange={handleOnChange}
                                className="border" type="text" name="review" id="review" cols="30" rows="5"
                                value={data.review}
                            ></textarea>
                        </div>
                        <div>
                            <button className='border p-2' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyReviews;