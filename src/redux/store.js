import { configureStore } from "@reduxjs/toolkit"
import coursesReducer from "./coursesSlice"
import authReducer from "./authSlice"

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    auth: authReducer,
  },
})

