import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        saveToCart: (state, action) => {
            const isOnCart = state.items.find(
                (item) => item.id == action.payload.id
            );

            if (!isOnCart) state.items?.push(action.payload);
        },
        removeFromCart: (state, action) => {
            console.log(action.payload);
            const arr = state.items;
            state.items = arr.filter((item) => item.id != action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            state.items = state.items.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity,
                    };
                }
                return item;
            });
        },
    },
});

export const { saveToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
