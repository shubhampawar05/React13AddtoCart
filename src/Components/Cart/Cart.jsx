import React from 'react'

const Cart = ({Data , dispatch}) => {
  console.log(Data);

   let total = Data.reduce((acc ,items)=>( acc += items.price * items.quantity),0)
    console.log(total);

  return (

    <div>
       <section className="w-full ">
        <div className="max-w-screen-lg mx-auto border-2 text-center relative">
          <h1 className="text-2xl font-bold py-2">CART </h1>
          <div className="shadow-xl px-4 py-2">
            {Data.map((items) => (
              items.quantity > 0 &&
              <div key={items.id}>
                <div className="flex justify-between shadow-md my-2 py-2 ">
                  <p className="w-1/2">{items.name}</p>
                  <p className="w-1/2">{items.price} X {items.quantity}</p>
                  
                </div>  
              </div>
            ))}
          </div>
          <div className='abolute shadow-xl m-2 p-2 bottom-1 right-1 '>
                <p className='flex justify-between px-8 text-2xl font-semibold'><span>Total :</span> <span>{total}</span></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart