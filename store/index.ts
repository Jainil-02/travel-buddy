import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import chatReducer from "./slices/chatSlice"
import plannerReducer from "./slices/plannerSlice"
import tripReducer from "./slices/tripSlice"
import uiReducer from "./slices/uiSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    planner: plannerReducer,
    trips: tripReducer,
    ui: uiReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
