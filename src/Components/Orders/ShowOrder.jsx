import React from "react";
import './ShowOrder.css'

const ShowOrder = (props) => {
    const { title, price, status, _id } = props.order;
    return (
        <>
            <div className='m-2 p-2 border '>
                <div className="grid grid-cols-5">
                    <div>{title}</div>
                    <div>{price}</div>
                    <div>{status}</div>
                    <div>
                        <button
                            onClick={() => props.cancelOrder(_id)}
                            className="text-red-700"
                        >Cancel</button>
                    </div>
                    {status === 'pending' && <div>
                        <button
                            onClick={() => props.shipOrder(_id, props.idx)}
                            className="text-red-700"
                        >Shipp it</button>
                    </div>}
                </div>
            </div>
        </>
    );
};

export default ShowOrder;