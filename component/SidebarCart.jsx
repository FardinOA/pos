"use client";
import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Cart from "./Cart";

const SidebarCart = () => {
    return (
        <Popover className="">
            {({ open, close }) => (
                <>
                    <Popover.Button className="  ">
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
                            class="lucide lucide-shopping-cart"
                        >
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                        </svg>
                        <span className="btm-nav-label">Pos</span>
                    </Popover.Button>

                    <Popover.Overlay className="absolute inset-0 bg-black/40">
                        <button className="btn btn-ghost ml-[37%] mt-[.2%] z-10 text-white bg-inherit hover:bg-inherit border-none outline-none   ">
                            X
                        </button>
                    </Popover.Overlay>
                    {/* <Popover.Button
                        aria-label="Open cart"
                        id="cartToggleButton"
                        className=" shadow-lg rounded-sm overflow-hidden cursor-pointer  outline-none focus:outline-none  "
                    >
                        hi
                    </Popover.Button> */}

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-500"
                        enterFrom="opacity-0 translate-x-10"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease-in duration-200"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 translate-x-10"
                    >
                        <Popover.Panel className="  fixed lg:absolute bg-white top-0 right-0 border-r border-r-gray-300 w-full md:w-80 lg:w-[60%] h-dvh z-50    ">
                            <div className="  flex lg:hidden justify-between bg-primary/20 px-4 items-center">
                                <p>Cart</p>
                                <button
                                    className="btn btn-ghost"
                                    onClick={close}
                                >
                                    X
                                </button>
                            </div>
                            <div className=" bg-white overflow-y-scroll lg:overflow-y-hidden h-dvh lg:h-fit pb-[4rem] p-4 py-2 flex gap-4  flex-wrap  ">
                                <Cart />
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default SidebarCart;
