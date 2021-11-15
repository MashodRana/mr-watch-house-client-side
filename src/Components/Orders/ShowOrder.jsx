import React from "react";
import useAuth from "../../Hooks/useAuth";
import "./ShowOrder.css";

const ShowOrder = (props) => {
  const { title, price, status, _id } = props.order;
  const { isAdmin } = useAuth();
  return (
    <>
      <div
        className="m-2 p-2 rounded "
        style={{ border: "1px solid rgba(146,68,170, 0.5)" }}
      >
        <div className="grid grid-cols-6 text-gray-500">
          <div className="col-span-3">{title}</div>
          <div>
            <p className="">${price}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-200">
              <span
                className={`px-4 py-1 rounded ${
                  status === "pending"
                    ? "text-gray-700 bg-yellow-300"
                    : "bg-green-700"
                }`}
              >
                {status}
              </span>
            </p>
            <button
              onClick={() => props.cancelOrder(_id)}
              className="text-red-700 text-2xl opacity-50 hover:opacity-100"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
          {isAdmin && status === "pending" && (
            <div>
              <button
                onClick={() => props.shipOrder(_id, props.idx)}
                className="text-red-700"
              >
                Shipp it
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShowOrder;
