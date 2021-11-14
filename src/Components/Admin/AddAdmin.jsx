import React from "react";
import { useState } from "react/cjs/react.development";
import useAuth from "../../Hooks/useAuth";
// import './AddAdmin.css'

const AddAdmin = () => {
    const { user } = useAuth();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState('');

    const handleOnChange = (evnt) => {
        setEmail(evnt.target.value);
    }


    const submitForm = (evnt) => {
        setMessage('');
        evnt.preventDefault();
        // console.log('inside the submitReview of add review ', reviewData)
        const url = `http://localhost:5000/users/admin`;
        fetch(url, {
            method: 'put',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(resData => {
                console.log(resData)
                setEmail('');
            })
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <h2>Give a review..</h2>
                    <form onSubmit={submitForm}>
                        <div>
                            <label className="mr-4" htmlFor="">Email</label>
                            <input
                                className="border"
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                            />
                        </div>
                        <div>
                            <button className='border p-2' type='submit'>Make Admin</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddAdmin;