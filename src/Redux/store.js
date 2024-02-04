import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todo_slice";

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})