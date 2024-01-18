import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ArticleType } from "../../interfaces/InterfaceType";

const initialState = {
  articles: [] as ArticleType[],
};

const stateReducerSlice = createSlice({
  name: "stateReducerSlice",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<ArticleType[]>) => {
      state.articles = action.payload;
      console.log(state.articles);
    },
  },
});
export const { setArticles } = stateReducerSlice.actions;
export default stateReducerSlice.reducer;
