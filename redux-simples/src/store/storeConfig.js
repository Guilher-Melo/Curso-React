import { configureStore, combineReducers } from "@reduxjs/toolkit";

import numerosReducer from "./reducers/numerosReducer";

const reducer = combineReducers({
  numeros: numerosReducer
});

function storeConfig() {
  return configureStore({reducer});
};

export default storeConfig;