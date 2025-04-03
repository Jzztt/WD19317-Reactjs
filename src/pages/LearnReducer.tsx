import React, { useReducer } from "react";

// Bước 1: Khởi tạo reducer
const reducer = (state: { count: number }, action: { type: string }) => {
  //   state= {
  //     count:0
  //   }
  //   action= {
  //     type:'increment'
  //   }
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
// Bước 2: khởi tạo initialState
const initialState = {
  count: 0,
};
const LearnReducer = () => {
  // Bước 3: Khởi tạo useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <p>Count: {state.count}</p>
    </>
  );
};

export default LearnReducer;
