import { configureStore } from "@reduxjs/toolkit";
import { panierSlice } from "./reducers/panierSlice";
export const Store = configureStore({
    reducer:{
        paniersnk: panierSlice.reducer
    }
})