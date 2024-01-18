import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fetchArticles from "../reducers/fetchArticles";

export interface RootState {
  fetchReducer: ReturnType<typeof fetchArticles>;
}

const rootReducer = combineReducers({
  fetchReducer: fetchArticles,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
