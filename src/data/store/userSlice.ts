import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  users: [
    {
      username: "test",
      password: "1234",
      isLoggedIn: false,
      currentPage: 1,
      favorites: [],
    },
    {
      username: "test2",
      password: "1234",
      isLoggedIn: true,
      currentPage: 1,
      favorites: [],
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const { movie } = action.payload;

      const user = state.users.find((u: any) => u.isLoggedIn);
      if (user) {
        user.favorites.push(movie);
      }
    },
    removeFavorite: (state, action) => {
      const { movie } = action.payload;

      const user = state.users.find((u: any) => u.isLoggedIn);
      if (user) {
        user.favorites = user.favorites.filter(
          (id: any) => id.imdbID !== movie.imdbID
        );
      }
    },
  },
});

export const { addFavorite, removeFavorite } = userSlice.actions;

export default userSlice.reducer;
