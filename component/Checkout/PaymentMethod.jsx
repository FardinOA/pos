import React, { useState } from "react";
import Cash from "./PaymentMethods/Cash";
import Card from "./PaymentMethods/Card";
import OnAccount from "./PaymentMethods/OnAccount";
import Cheque from "./PaymentMethods/Cheque";

const PaymentMethod = () => {
    const [renderItem, setRenderItem] = useState(2);
    const paymentMethods = {
        1: {
            name: "Cash",
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
                    class="lucide lucide-dollar-sign"
                >
                    <line x1="12" x2="12" y1="2" y2="22" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            ),
            content: <Cash />,
        },
        2: {
            name: "Card",
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
                    class="lucide lucide-credit-card"
                >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                </svg>
            ),
            content: <Card />,
        },
        3: {
            name: "On Account",
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
                    class="lucide lucide-user"
                >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
            content: <OnAccount />,
        },
        4: {
            name: "Cheque",
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
                    class="lucide lucide-wallet"
                >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                </svg>
            ),
            content: <Cheque />,
        },
    };
    return (
        <div className="bg-white grid grid-cols-12 border border-gray-300 h-full ">
            <div className=" col-span-12 lg:col-span-3 border-r border-r-gray-300 border-b-2 lg:border-b-0 h-fit lg:h-full ">
                {Object.keys(paymentMethods)?.map((ele, ind) => (
                    <p
                        onClick={() => setRenderItem(ele)}
                        className={`cursor-pointer transition-all duration-500 flex gap-2 p-4 font-semibold   ${
                            renderItem == ele && "text-primary bg-primary/20"
                        } `}
                    >
                        {paymentMethods[ele].icon}{" "}
                        <span>{paymentMethods[ele].name}</span>
                    </p>
                ))}
            </div>
            <div className="col-span-12 lg:col-span-9 p-4 transition-all duration-500 ">
                {paymentMethods[renderItem]?.content}
            </div>
        </div>
    );
};

export default PaymentMethod;
