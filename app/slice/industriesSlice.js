import { createSlice } from '@reduxjs/toolkit';

export const industriesSlice = createSlice({
  name: 'Industries',
  initialState: {
      industriesData : []
  },
  reducers: {
    setIndustriesData: (state , action) => { 
      console.log(action.payload);
      state.industriesData = [...action.payload];
    },
    setIndustry: (state , action) => { 
      console.log(action.payload);
      state.industriesData.push(action.payload);
    },
    delIndustry: (state, action) => { 
      console.log(action.payload);
      state.industriesData = state.industriesData.filter((data, index) => index !== action.payload.index);
    },
    setUpdateIndustry: (state, action) => {
      console.log(action.payload);
      state.industriesData[action.payload.index] = action.payload.data;
    }
  },
});

export const { setIndustriesData, setIndustry, delIndustry, setUpdateIndustry } = industriesSlice.actions;

export const selectIndustriesData = state => state.industries.industriesData;

export default industriesSlice.reducer;
