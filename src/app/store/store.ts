import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modal/modalSlice";
import authSlice from "./auth/authSlice";
import { servicesApi } from "./services";
import { reviewsApi } from "./reviews";
import { teamApi } from "./team";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    auth: authSlice,
    [servicesApi.reducerPath]: servicesApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      servicesApi.middleware,
      reviewsApi.middleware,
      teamApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
