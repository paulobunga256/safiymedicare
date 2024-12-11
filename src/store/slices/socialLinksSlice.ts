import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import socialLinksData from '../../data/socialLinks.json';

interface SocialLink {
  id: number;
  platform: string;
  href: string;
  icon: string;
}

interface SocialLinksState {
  socialLinks: SocialLink[];
  loading: boolean;
  error: string | null;
}

const initialState: SocialLinksState = {
  socialLinks: socialLinksData.socialLinks,
  loading: false,
  error: null,
};

export const socialLinksSlice = createSlice({
  name: 'socialLinks',
  initialState,
  reducers: {
    setSocialLinks: (state, action: PayloadAction<SocialLink[]>) => {
      state.socialLinks = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setSocialLinks, setLoading, setError } = socialLinksSlice.actions;
export default socialLinksSlice.reducer;