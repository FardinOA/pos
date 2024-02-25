"use client";
import {
    removeFromCart,
    updateQuantity,
} from "@/lib/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import React, { useState } from "react";

const CartItems = () => {
    const { items } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    // console.log(items);

    return (
        <div className="   lg:px-4 py-2 space-y-1 ">
            {items?.map((ele, ind) => (
                <div
                    className="flex justify-between items-center gap-1 lg:gap-2"
                    key={`cart-items-${ele.id}`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-file-pen-line size-4 lg:size-5"
                    >
                        <path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
                        <path d="M8 18h1" />
                        <path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z" />
                    </svg>
                    <div className="border px-2 py-2 w-full grid grid-cols-12 gap-1 lg:gap-4 items-center">
                        <p className="col-span-5 text-xs lg:text-base text-nowrap  overflow-hidden ">
                            {" "}
                            {ele?.name}
                        </p>
                        <p className="col-span-2 text-xs lg:text-base text-nowrap  overflow-hidden">
                            ${ele?.price}
                        </p>
                        <div className=" col-span-3 ">
                            <div className="  flex  justify-between items-center">
                                <button
                                    onClick={() => {
                                        dispatch(
                                            updateQuantity({
                                                quantity: ele?.quantity
                                                    ? ele?.quantity - 1
                                                    : 1,
                                                id: ele?.id,
                                            })
                                        );
                                    }}
                                    className="btn btn-circle btn-xs font-bold"
                                >
                                    -
                                </button>
                                <input
                                    onChange={(e) =>
                                        dispatch(
                                            updateQuantity({
                                                quantity: e.target.value,
                                                id: ele.id,
                                            })
                                        )
                                    }
                                    type="number"
                                    className="  outline-none focus:outline-none border-none input input-sm px-1 w-full   "
                                    value={ele.quantity}
                                />
                                <button
                                    onClick={() => {
                                        dispatch(
                                            updateQuantity({
                                                quantity: ele?.quantity
                                                    ? ele?.quantity + 1
                                                    : 1,
                                                id: ele?.id,
                                            })
                                        );
                                    }}
                                    className="btn btn-circle btn-xs font-bold"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <p className="col-span-2 text-xs lg:text-base text-nowrap  overflow-hidden">
                            ${Number(ele?.price * ele?.quantity).toFixed(2)}
                        </p>
                    </div>
                    <svg
                        onClick={() => dispatch(removeFromCart(ele?.id))}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-trash-2 text-red-500 size-4 lg:size-5 "
                    >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                </div>
            ))}
        </div>
    );
};

export default CartItems;
