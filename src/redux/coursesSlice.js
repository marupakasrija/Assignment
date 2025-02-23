import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCourses } from "../services/api"

export const getCourses = createAsyncThunk("courses/getCourses", async () => {
  const response = await fetchCourses()
  return response.data
})

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    list: [],
    status: "idle",
    error: null,
    enrolledCourses: [],
  },
  reducers: {
    enrollCourse: (state, action) => {
      if (!state.enrolledCourses.includes(action.payload)) {
        state.enrolledCourses.push(action.payload)
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.list = action.payload
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

export const { enrollCourse } = coursesSlice.actions
export default coursesSlice.reducer

