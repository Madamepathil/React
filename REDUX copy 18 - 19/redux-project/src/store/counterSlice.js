import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

//förbereder en slice av vår globala state
//du behöver inte ta hänsyns till andra states
//immer tar hand om uppdateringen

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    toggleCounter(state, action) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
