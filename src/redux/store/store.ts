import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "../reducers/stateReducer";

//Rootstate è il tipo dello slice che
export interface RootState {
  globalState: ReturnType<typeof stateReducer>;
}

const store = configureStore({
  // questo "reducer" sarebbe lo state in state.globalState.articles
  reducer: {
    globalState: stateReducer,
  },
});

export default store;

/* import { combineReducers, configureStore } from "@reduxjs/toolkit";
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

export default store; */
