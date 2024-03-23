import React, { useState } from "react";

const Product = ({ Data, dispatch }) => {
 
  // console.log(Data);
  return (
    <div>
      <section className="w-full ">
        <div className="max-w-screen-lg mx-auto border-2 text-center">
          <h1 className="text-2xl font-bold py-2">Products </h1>
          <div className="shadow-xl px-4 py-2">
            {Data.map((items) => (
              <div key={items.id}>
                <div className="flex justify-between shadow-md my-2 py-2 ">
                  <p className="w-1/3">{items.name}</p>
                  <p className="w-1/3">{items.price}</p>
                  <p className="w-1/3">
                   <button
                      onClick={() =>
                        dispatch({ type: "MINUS", payload: items })
                      }
                      className="px-3 mr-4 bg-red-300 rounded-md"
                    >
                      -
                    </button>
                    <span className="px-3 mr-4 rounded-md">
                      {items.quantity}
                    </span>{" "}
                    <button
                      onClick={() => {
                        dispatch({
                          type: "PLUS",
                          payload: items,
                        });
                        
                      }}
                      className="px-3 mr-4 bg-green-300 rounded-md"
                    >
                      +
                    </button>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
