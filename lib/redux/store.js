import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productSlice from "./features/product/productSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            cart: cartSlice,
            product: productSlice,
        },
        devTools: process.env.NODE_ENV !== "production" ? true : false,
    });
};
