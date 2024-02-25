"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Card = () => {
    const router = useRouter();
    return (
        <div>
            <div className="space-y-2 lg:px-8 lg:py-4  ">
                <input
                    type="text"
                    placeholder="Card Name"
                    className="h-[3rem] px-4 py-4 pb-1 outline-none focus:outline-none border-b-[1px] border-b-gray-300 rounded-none w-full"
                />
                <input
                    type="Number"
                    placeholder="Card Number"
                    className="h-[3rem] px-4 py-4 pb-1 outline-none focus:outline-none border-b-[1px] border-b-gray-300 rounded-none w-full"
                />
                <input
                    type="Number"
                    placeholder="Card Expire Date"
                    className="h-[3rem] px-4 py-4 pb-1 outline-none focus:outline-none border-b-[1px] border-b-gray-300 rounded-none w-full"
                />
                <input
                    type="text"
                    placeholder="Card Secrete"
                    className="h-[3rem] px-4 py-4 pb-1 outline-none focus:outline-none border-b-[1px] border-b-gray-300 rounded-none w-full"
                />
            </div>

            <div className="lg:px-8 lg:py-4 flex  gap-4 mt-8 lg:mt-0 lg:justify-end items-center">
                <button
                    onClick={() => {
                        router.push("/");
                    }}
                    className="btn rounded-md bg-error/30 text-error hover:bg-error/40 "
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
                        class="lucide lucide-x-circle"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m15 9-6 6" />
                        <path d="m9 9 6 6" />
                    </svg>{" "}
                    <span>Cancel</span>
                </button>

                <button className="btn rounded-md bg-primary/30 text-primary hover:bg-primary/40 ">
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
                    <span>Complete Payment</span>
                </button>
            </div>
        </div>
    );
};

export default Card;
