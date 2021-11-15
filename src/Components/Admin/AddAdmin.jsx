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
        const url = `https://hidden-shelf-04105.herokuapp.com/users/admin`;
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
                <h2 className='text-xl text-gray-700 mb-6'>Make Admin here</h2>
                <div className="grid grid-cols-1 text-gray-500">

                    <form onSubmit={submitForm}>
                        <div className='flex justify-center'>
                            <div>
                                <label className="mr-6 text-lg" htmlFor="">Email:</label>
                                <input
                                    className="px-5 py-1 focus:outline-none text-gray-700 b-bottom bg-transparent focus:bg-gray-50"
                                    type="email"
                                    name="email"
                                    placeholder='admin@gmail.com'
                                    value={email}
                                    onChange={handleOnChange}
                                />
                            </div>
                            <div className='ml-6'>
                                <button className='px-5 py-1 bgc1 text-gray-200 rounded' type='submit'>Make Admin</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddAdmin;