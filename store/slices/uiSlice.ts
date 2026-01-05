import { createSlice } from "@reduxjs/toolkit"

interface UIState {
  isLoading: boolean
}

const initialState: UIState = {
  isLoading: false,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
})

export default uiSlice.reducer
