import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  launches: [],
};

const SuccessLaunchesSlice = createSlice({
  name: 'launches',
  initialState,
  reducers: {
    setLaunches(state, action) {
      state.launches = action.payload.reverse();
    },
    getLaunchesLatest(state) {
      state.launches = state.launches.reverse();
    },
  },
});

export const { setLaunches, getLaunchesLatest } = SuccessLaunchesSlice.actions;

export default SuccessLaunchesSlice.reducer;
