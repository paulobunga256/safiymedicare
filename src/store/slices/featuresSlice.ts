import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import featuresData from '../../data/features.json';

interface Feature {
  id: number;
  text: string;
}

interface FeaturesState {
  features: Feature[];
  loading: boolean;
  error: string | null;
}

const initialState: FeaturesState = {
  features: featuresData.features,
  loading: false,
  error: null,
};

export const featuresSlice = createSlice({
  name: 'features',
  initialState,
  reducers: {
    setFeatures: (state, action: PayloadAction<Feature[]>) => {
      state.features = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setFeatures, setLoading, setError } = featuresSlice.actions;
export default featuresSlice.reducer;