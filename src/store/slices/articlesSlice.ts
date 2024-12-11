import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import articlesData from '../../data/articles.json';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

interface ArticlesState {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  articles: articlesData.articles,
  loading: false,
  error: null,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setArticles, setLoading, setError } = articlesSlice.actions;
export default articlesSlice.reducer;