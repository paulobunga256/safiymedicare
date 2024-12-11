import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import faqsData from '../../data/faqs.json';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface FAQsState {
  faqs: FAQ[];
  loading: boolean;
  error: string | null;
}

const initialState: FAQsState = {
  faqs: faqsData.faqs,
  loading: false,
  error: null,
};

export const faqsSlice = createSlice({
  name: 'faqs',
  initialState,
  reducers: {
    setFAQs: (state, action: PayloadAction<FAQ[]>) => {
      state.faqs = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setFAQs, setLoading, setError } = faqsSlice.actions;
export default faqsSlice.reducer;