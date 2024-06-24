import { configureStore, combineReducers } from "@reduxjs/toolkit";
import getAllBooksReducer from "../reducers/getAllBooks";

const mainReducer = combineReducers({
  getAllBooks: getAllBooksReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
