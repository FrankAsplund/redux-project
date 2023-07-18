// store/reducers/exampleReducer.js

const initialState = {
  // Define your initial state here
  value: 0,
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle different action types here
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default exampleReducer;
