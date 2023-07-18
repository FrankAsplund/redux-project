// store/reducers/index.js

import { combineReducers } from "redux";

// Import your individual reducers here
import exampleReducer from "./exampleReducer"; // Create this file later

const rootReducer = combineReducers({
  // Add your individual reducers here
  example: exampleReducer,
});

export default rootReducer;
