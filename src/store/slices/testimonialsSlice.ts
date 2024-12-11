import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import testimonialsData from '../../data/testimonials.json';

interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  image: string;
}

interface TestimonialsState {
  testimonials: Testimonial[];
  loading: boolean;
  error: string | null;
}

const initialState: TestimonialsState = {
  testimonials: testimonialsData.testimonials,
  loading: false,
  error: null,
};

export const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    setTestimonials: (state, action: PayloadAction<Testimonial[]>) => {
      state.testimonials = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setTestimonials, setLoading, setError } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;