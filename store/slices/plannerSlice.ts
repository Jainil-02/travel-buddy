import { createSlice } from "@reduxjs/toolkit"

interface PlannerState {
  itinerary: null
}

const initialState: PlannerState = {
  itinerary: null,
}

const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {},
})

export default plannerSlice.reducer
