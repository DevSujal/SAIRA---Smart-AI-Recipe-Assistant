import { configureStore } from "@reduxjs/toolkit";
import dbReducer from "./features/dbReducer";

export const store = configureStore({
    reducer: {
        dbReducer
    }
})