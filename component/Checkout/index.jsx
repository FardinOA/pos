"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import React from "react";
import PaymentMethod from "./PaymentMethod";

const Checkout = () => {
    const { items } = useAppSelector((state) => state.cart);

    const subTotal = items.reduce((accumulator, item) => {
        return accumulator + item.quantity * item.price;
    }, 0);
    return (
        <div className="border h-dvh bg-base-300 p-2 lg:p-8 space-y-4 ">
            <div className="flex justify-between bg-base-200 border border-gray-300 p-6 ">
                <p className="text-gray-500 ">Order Amount</p>
                <p className="text-gray-600 font-bold text-xl ">
                    ${Number(subTotal + 10.0 + 5.5 + 25.5).toFixed(2)}
                </p>
            </div>

            <PaymentMethod />
        </div>
    );
};

export default Checkout;
