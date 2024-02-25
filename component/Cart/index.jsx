"use client";
import React from "react";
import AddCustomer from "./AddCustomer";
import CartItems from "./CartItems";
import { useAppSelector } from "@/lib/redux/hooks";
import Link from "next/link";
import Sidebar from "../Sidebar";

const Cart = () => {
    const { items } = useAppSelector((state) => state.cart);

    const subTotal = items.reduce((accumulator, item) => {
        return accumulator + item.quantity * item.price;
    }, 0);
    return (
        <div className=" h-dvh w-full flex  flex-col justify-between">
            <div className=" overflow-y-scroll flex-1 space-y-2">
                <div className="hidden lg:flex justify-between items-center p-4 ">
                    <Sidebar />
                    <button className="btn rounded-md ">
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
                            class="lucide lucide-sticky-note"
                        >
                            <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
                            <path d="M15 3v4a2 2 0 0 0 2 2h4" />
                        </svg>
                        <span>Note</span>
                    </button>
                    <button className="btn rounded-md ">
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
                            class="lucide lucide-truck"
                        >
                            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                            <path d="M15 18H9" />
                            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                            <circle cx="17" cy="18" r="2" />
                            <circle cx="7" cy="18" r="2" />
                        </svg>
                        <span>Shipping</span>
                    </button>
                    <button className="btn rounded-md ">
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
                            class="lucide lucide-loader"
                        >
                            <line x1="12" x2="12" y1="2" y2="6" />
                            <line x1="12" x2="12" y1="18" y2="22" />
                            <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
                            <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
                            <line x1="2" x2="6" y1="12" y2="12" />
                            <line x1="18" x2="22" y1="12" y2="12" />
                            <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
                            <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
                        </svg>
                        <span>Hold order</span>
                    </button>
                    <button className="btn rounded-md ">
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
                            class="lucide lucide-plus-circle"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M8 12h8" />
                            <path d="M12 8v8" />
                        </svg>
                        <span>New Item</span>
                    </button>
                </div>
                <div className="bg-base-200 p-4 flex justify-between items-center ">
                    <div className="flex items-center gap-4">
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
                            class="lucide lucide-circle-user fill-base-200"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="10" r="3" />
                            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                        </svg>
                        <span>Fardin OA</span>
                    </div>
                    <AddCustomer />
                </div>
                <CartItems />
            </div>

            <div className="">
                <div className="grid grid-cols-12">
                    <div className="col-span-10 col-start-3 lg:col-span-4 lg:col-start-9 ">
                        <table className="table text-gray-400 table-sm">
                            <tbody>
                                <tr></tr>
                                <tr>
                                    <td>Sub Total</td>
                                    <td className="text-gray-500 font-semibold">
                                        ${Number(subTotal).toFixed(2)}
                                    </td>
                                </tr>
                                <tr>
                                    <td>TAX</td>
                                    <td className="text-gray-500 font-semibold">
                                        $25.50
                                    </td>
                                </tr>
                                <tr>
                                    <td>Shipping</td>
                                    <td className="text-gray-500 font-semibold">
                                        $5.50
                                    </td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td className="text-gray-500 font-semibold">
                                        $10.00
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="grid grid-cols-12 rounded-md bg-primary/30 text-primary">
                    <div className=" hidden  col-span-8 h-full px-4 lg:flex items-center">
                        <p>Products count ({items?.length})</p>
                    </div>
                    <div className="col-span-10 col-start-3 lg:col-span-4 lg:col-start-9 ">
                        <table className="table border-primary/30 text-primary table-sm">
                            <tbody>
                                <tr className="border-none">
                                    <td className="text-lg font-bold">Total</td>
                                    <td className=" text-lg font-bold">
                                        $
                                        {Number(
                                            subTotal + 10.0 + 5.5 + 25.5
                                        ).toFixed(2)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=" grid grid-cols-2 lg:grid-cols-4  gap-2 mt-2  ">
                    <button className=" flex-1 btn bg-error/30 text-error hover:bg-error/40 rounded-md">
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
                            class="lucide lucide-x-circle"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m15 9-6 6" />
                            <path d="m9 9 6 6" />
                        </svg>
                        <span>Cancel</span>
                    </button>
                    <button className=" flex-1 btn bg-primary/30 text-primary hover:bg-primary/30 rounded-md ">
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
                            class="lucide lucide-grab"
                        >
                            <path d="M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
                            <path d="M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                            <path d="M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                            <path d="M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                            <path d="M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
                        </svg>
                        <span>Hold</span>
                    </button>
                    <button className=" flex-1 btn bg-primary/30 text-primary hover:bg-primary/30 rounded-md ">
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
                            class="lucide lucide-badge-dollar-sign"
                        >
                            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                            <path d="M12 18V6" />
                        </svg>
                        <span>Discount</span>
                    </button>
                    <Link
                        href={"/checkout"}
                        className=" flex-1 btn bg-primary/30 text-primary hover:bg-primary/30 rounded-md "
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
                            class="lucide lucide-hand-coins"
                        >
                            <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
                            <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                            <path d="m2 16 6 6" />
                            <circle cx="16" cy="9" r="2.9" />
                            <circle cx="6" cy="5" r="3" />
                        </svg>
                        <span>Pay Now</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
