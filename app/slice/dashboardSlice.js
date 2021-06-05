import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: 'Dashboard',
  initialState: {
      dashboardData : {}
  },
  reducers: {
    setDashboardData: (state , action) => { 
      console.log(action.payload);
      state.dashboardData = action.payload;
    }
  },
});

export const { setDashboardData } = dashboardSlice.actions;

export const selectDashboardData = state => state.dashboard.dashboardData;

export default dashboardSlice.reducer;
