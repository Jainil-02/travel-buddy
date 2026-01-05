import { createSlice } from "@reduxjs/toolkit"

interface TripState {
  currentTrip: null
}

const initialState: TripState = {
  currentTrip: null,
}

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {},
})

export default tripSlice.reducer
