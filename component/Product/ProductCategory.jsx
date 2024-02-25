"use client";
import { useAppSelector } from "@/lib/redux/hooks";
import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const ProductCategory = ({ isOpen }) => {
    const { categories } = useAppSelector((state) => state.product);
    // if (!isOpen) return null;
    return (
        <Popover className="">
            {({ open, close }) => (
                <>
                    <div className="hidden lg:flex items-center gap-3 overflow-x-scroll  ">
                        {categories?.slice(0, 5).map((ele, ind) => (
                            <Popover.Button
                                key={`product-category-${ind}`}
                                className="btn border-2 border-gray-500  bg-white btn-outline rounded-md"
                            >
                                {ele?.name}
                            </Popover.Button>
                        ))}
                    </div>
                    <Popover.Button className=" lg:hidden btn border-2 border-gray-500  bg-white btn-outline rounded-md">
                        All categories
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
                                <p>All categories</p>
                                <button
                                    className="btn btn-ghost"
                                    onClick={close}
                                >
                                    X
                                </button>
                            </div>
                            <div className=" bg-white overflow-y-scroll lg:overflow-y-hidden h-dvh lg:h-fit pb-[4rem] p-4 py-2 flex gap-4  flex-wrap  ">
                                {categories?.map((ele, ind) => (
                                    <button
                                        key={`product-category-${ind}`}
                                        className="btn bg-white btn-outline rounded-sm"
                                    >
                                        {ele?.name}
                                    </button>
                                ))}
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default ProductCategory;
