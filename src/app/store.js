import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from "../features/topics/topicsSlice/topicsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
  },
});
