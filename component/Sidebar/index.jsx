"use client";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";

const Sidebar = () => {
    const pathName = usePathname();
    const menu = [
        {
            name: "Pos",
            icon: (
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
            ),
            url: "/",
        },
        {
            name: "Dashboard",
            icon: (
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
                    class="lucide lucide-layout-dashboard"
                >
                    <rect width="7" height="9" x="3" y="3" rx="1" />
                    <rect width="7" height="5" x="14" y="3" rx="1" />
                    <rect width="7" height="9" x="14" y="12" rx="1" />
                    <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
            ),
            url: "#",
        },
    ];
    return (
        <Popover className="">
            {({ open, close }) => (
                <>
                    <Popover.Button className="btn outline-none border-none bg-inherit border-2 border-gray-500   btn-outline rounded-md">
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
                            class="lucide lucide-align-justify"
                        >
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                        </svg>
                    </Popover.Button>

                    <Popover.Overlay className="absolute inset-0 bg-black/40 z-10">
                        <button className=" hidden lg:block btn btn-ghost ml-[20.5rem] mt-[.2%] z-10 text-white bg-inherit hover:bg-inherit border-none outline-none   ">
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
                        enter="transition ease-in duration-300"
                        enterFrom="opacity-0 -translate-x-10"
                        enterTo="opacity-100 translate-x-0"
                        leave="transition ease-out duration-200"
                        leaveFrom="opacity-100 translate-x-0"
                        leaveTo="opacity-0 -translate-x-10"
                    >
                        <Popover.Panel className="  absolute bg-white top-0 left-0 border-l border-r-gray-300 w-full md:w-[20rem]   h-dvh z-50    ">
                            <div className=" flex h-full flex-col justify-between relative">
                                <button
                                    onClick={close}
                                    className="btn btn-ghost absolute top-2 right-2 btn-outline lg:hidden rounded-sm "
                                >
                                    X
                                </button>
                                <div>
                                    <div>
                                        <Image
                                            src={`/q-pos.png`}
                                            width={0}
                                            height={0}
                                            sizes="100"
                                            className="w-28 mx-auto"
                                        />
                                        <p className="text-center text-gray-500">
                                            Los Angeles, California
                                        </p>
                                    </div>
                                    <div>
                                        {menu?.map((ele, ind) => (
                                            <Link
                                                href={ele.url}
                                                className={` cursor-pointer flex items-center p-4 gap-2 ${
                                                    pathName == ele.url &&
                                                    "bg-primary/20"
                                                } `}
                                                key={`menu-${ind}`}
                                            >
                                                {ele.icon}{" "}
                                                <span>{ele.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <button className="btn w-full btn-outline rounded-sm border-gray-400 ">
                                    Logout
                                </button>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default Sidebar;
