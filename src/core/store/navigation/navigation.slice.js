import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: false
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    fetchNavigationList: (state) => {
      state.loading = true
    },
    fetchNavigationSuccess: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    fetchNavigationFailed: (state) => {
      state.error = true
      state.loading = false
    }, 
  },
});

export const navigationSelector = state => state.navigation;

export const { fetchNavigationList, fetchNavigationSuccess, fetchNavigationFailed } = navigationSlice.actions;

export default navigationSlice.reducer;
