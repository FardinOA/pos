"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import React, { useState } from "react";
import ProductCategory from "./ProductCategory";
import Image from "next/image";
import List from "./List";
import Sidebar from "../Sidebar";

const Product = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { categories } = useAppSelector((state) => state.product);

    return (
        <div className=" bg-base-200  h-dvh overflow-y-scroll space-y-4   ">
            <div className="p-4 shadow-[0px_13px_10px_-4px_rgba(0,0,0,0.1)] flex justify-between items-center ">
                <div className=" lg:hidden ">
                    <Sidebar />
                </div>
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
                    class="lucide lucide-search"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                </svg>

                <input
                    type="text"
                    placeholder="Search Products..."
                    className="input focus:outline-none bg-inherit outline-none w-full border-none "
                />

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
                    class="lucide lucide-qr-code"
                >
                    <rect width="5" height="5" x="3" y="3" rx="1" />
                    <rect width="5" height="5" x="16" y="3" rx="1" />
                    <rect width="5" height="5" x="3" y="16" rx="1" />
                    <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                    <path d="M21 21v.01" />
                    <path d="M12 7v3a2 2 0 0 1-2 2H7" />
                    <path d="M3 12h.01" />
                    <path d="M12 3h.01" />
                    <path d="M12 16v.01" />
                    <path d="M16 12h1" />
                    <path d="M21 12v.01" />
                    <path d="M12 21v-1" />
                </svg>
            </div>

            <div className="p-4 py-2 flex justify-between items-center ">
                <ProductCategory />
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
                    class="lucide lucide-more-vertical"
                >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                </svg>
            </div>
            <List />
        </div>
    );
};

export default Product;
