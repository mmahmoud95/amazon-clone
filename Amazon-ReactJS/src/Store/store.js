import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Slice/Cart";
import loaderReducer from "./Slice/Loader";
export const store = configureStore({
    reducer: {
        Cart: CartReducer,
        Loader: loaderReducer,
    },
});
