"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function AddCustomer() {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <svg
                onClick={openModal}
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

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/35" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="div"
                                        className="text-lg flex items-center lg:text-xl font-medium leading-6 text-gray-900"
                                    >
                                        <svg
                                            onClick={closeModal}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="lucide lucide-chevron-left"
                                        >
                                            <path d="m15 18-6-6 6-6" />
                                        </svg>{" "}
                                        <p className="text-center lg:text-xl font-bold w-full ">
                                            Add New Customer
                                        </p>
                                    </Dialog.Title>
                                    <div className="mt-2 space-y-2 ">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="h-[3rem] px-4 py-4 pb-1 outline-none focus:outline-none border-b-[1px] border-b-gray-300 rounded-none w-full"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="h-[3rem] px-4 py-4 pb-1 outline-none focus:outline-none border-b-[1px] border-b-gray-300 rounded-none w-full"
                                        />
                                        <input
                                            type="number"
                                            placeholder="Phone"
                                            className="h-[3rem] px-4 py-4 pb-1 outline-none focus:outline-none border-b-[1px] border-b-gray-300 rounded-none w-full"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Currency"
                                            className="h-[3rem] px-4 py-4 pb-1 outline-none focus:outline-none border-b-[1px] border-b-gray-300 rounded-none w-full"
                                        />
                                        <input
                                            type="text"
                                            placeholder="TAX ID"
                                            className="h-[3rem] px-4 py-4 pb-1 outline-none focus:outline-none border-b-[1px] border-b-gray-300 rounded-none w-full"
                                        />

                                        <div className=" pt-6 font-semibold text-primary flex gap-4 items-center">
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
                                                class="lucide lucide-plus"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="M12 5v14" />
                                            </svg>
                                            <span>Add More Details</span>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <button className="btn rounded-md text-white w-full outline-none btn-primary">
                                            Update
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
