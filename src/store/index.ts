import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './slices/articlesSlice';
import servicesReducer from './slices/servicesSlice';
import testimonialsReducer from './slices/testimonialsSlice';
import faqsReducer from './slices/faqsSlice';
import featuresReducer from './slices/featuresSlice';
import socialLinksReducer from './slices/socialLinksSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    services: servicesReducer,
    testimonials: testimonialsReducer,
    faqs: faqsReducer,
    features: featuresReducer,
    socialLinks: socialLinksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;