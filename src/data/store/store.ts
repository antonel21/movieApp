import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesByTitleSlice";
import movieByIdReducer from "./movieByIdSlice";
import { omdApi } from "../endpoints/app.endpoints";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    [omdApi.reducerPath]: omdApi.reducer,
    moviesByTitle: moviesReducer,
    movieById: movieByIdReducer,
    user: userReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(omdApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
