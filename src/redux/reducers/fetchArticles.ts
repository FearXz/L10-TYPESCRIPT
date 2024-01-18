import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ArticleType } from "../../interfaces/ArticleType";

const initialState = {
  articles: [] as ArticleType[],
};

const fetchArticlesSlice = createSlice({
  name: "fetchArticles",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<ArticleType[]>) => {
      state.articles = action.payload;
      console.log(state.articles);
    },
  },
});
export const { setArticles } = fetchArticlesSlice.actions;
export default fetchArticlesSlice.reducer;
