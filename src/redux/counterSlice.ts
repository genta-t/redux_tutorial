import { createSlice } from "@reduxjs/toolkit";

export const counterReducer = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // 2, 5, 100 etc...
    },
    incrementByReduce: (state, action) => {
      state.value -= action.payload; // 2, 5, 100 etc...
    },
  },
});

export const { increment, decrement, incrementByAmount, incrementByReduce } = counterReducer.actions;
export default counterReducer.reducer;