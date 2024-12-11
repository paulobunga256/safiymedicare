import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import servicesData from '../../data/services.json';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ServicesState {
  services: Service[];
  loading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  services: servicesData.services,
  loading: false,
  error: null,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<Service[]>) => {
      state.services = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setServices, setLoading, setError } = servicesSlice.actions;
export default servicesSlice.reducer;