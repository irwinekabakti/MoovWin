import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./action-slice/home-slice";

const store = configureStore({
  reducer: {
    homeStore: homeSlice.reducer
  }
})

export default store