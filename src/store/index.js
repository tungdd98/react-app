import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "./modules/authenticateSlice";

export default configureStore({
  reducer: {
    authenticate: authenticateReducer,
  },
});
