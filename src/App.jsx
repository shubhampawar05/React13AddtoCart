import { useReducer } from "react";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Product/Product";

const initialState = {
  ProductData: [
    { id: 101, name: "Product-1", quantity: 0, price: 100 },
    { id: 201, name: "Product-2", quantity: 0, price: 200 },
    { id: 301, name: "Product-3", quantity: 0, price: 300 },
  ],
};
function reducer(state, action) {
  switch (action.type) {
    case "PLUS":
      return {
        ...state,
        ProductData: state.ProductData.map((ele) => {
            if(ele.id === action.payload.id){
              return {...ele ,quantity: ele.quantity+1 }
            }else{
              return ele
           }
        }),
      };

    case "MINUS":
      
      return {
        ...state,
        ProductData: state.ProductData.map((ele) => {
          if (ele.id === action.payload.id && ele.quantity > 0) {
          
            return { ...ele, quantity: ele.quantity-1 };
          } else {
            return ele;
          }
        }),
      };
    default:
      return state;
  }
}

// function reducer(state, action) {
//   switch (action.type) {
//     case "PLUS":
//       if(action.payload.quantity=0){
//       const updatedProductData = state.ProductData.map((product) =>
//         product.id === action.payload.id
//           ? { ...product, quantity: product.quantity + 1 }
//           : product
//       );
//       return {
//         ...state,
//         ProductData: updatedProductData,
//         CartData: [...state.CartData, action.payload],
//         Quantity: state.Quantity + 1,
//         Total: state.Total + action.payload.price,
//       };
//     }else{
//       return {
//         ...state,
//         ProductData: updatedProductData,
//         CartData: [...state.CartData, action.payload].map((product)=>{
//                   product.id === action.payload.id ? {...product, product:quantity+1}: product
//         }),
//         Quantity: state.Quantity + 1,
//         Total: state.Total + action.payload.price,
//       };
//     }

//     case "MINUS":
//       return state;

//     default:
//       return state;
//   }
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "PLUS":
//       const updatedProductData = state.ProductData.map((product) =>
//         product.id === action.payload.items.id
//           ? { ...product, quantity: product.quantity + 1 }
//           : product
//       );

//       return {
//         ...state,
//         ProductData: updatedProductData,
//         CartData: [...state.CartData, action.payload.items],
//         Quantity: state.Quantity + 1,
//         Total: state.Total + action.payload.items.price,
//       };

//     case "MINUS":
//       // Handle the logic for decrementing quantity here
//       return state;

//     default:
//       return state;
//   }
// }

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  return (
    <>
      <div className="max-w-screen-lg mx-auto flex justify-between gap-2  mt-4">
        <div className="w-1/2">
          <Product Data={state.ProductData} dispatch={dispatch} />
        </div>
        <div className="w-1/2">
          <Cart Data={state.ProductData} dispatch={dispatch} />
        </div>
        <p>{state.Total}</p>
      </div>
    </>
  );
}

export default App;
