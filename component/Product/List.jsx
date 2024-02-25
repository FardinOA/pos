import { saveToCart } from "@/lib/redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import Image from "next/image";
import React from "react";

const List = () => {
    const { items } = useAppSelector((state) => state.product);
    const { items: cartItems } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    const addToCart = (product) => {
        dispatch(saveToCart({ quantity: 1, ...product }));
    };
    return (
        <div className="   px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {items?.map((ele, ind) => {
                const isOnCart = cartItems.find((item) => item.id == ele.id);

                return (
                    <div
                        onClick={() => addToCart(ele)}
                        className="bg-white overflow-hidden relative cursor-pointer border shadow-md transition-all duration-500 hover:shadow-xl border-gray-500 rounded-sm "
                        key={`product-${ele.id}`}
                    >
                        {isOnCart ? (
                            <div className="absolute top-0 right-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
                                <p className="text-white font-bold text-center ">
                                    Selected
                                </p>
                            </div>
                        ) : null}
                        <figure>
                            <Image
                                src={ele.image}
                                width={0}
                                height={0}
                                sizes="100"
                                className="w-full h-36 object-contain object-center rounded-sm "
                            />
                        </figure>
                        <div className="bg-base-200 divide-y-2 divide-gray-200">
                            <p className="text-center text-sm lg:text-base font-bold text-gray-600 ">
                                {ele.price}
                            </p>
                            <p className="text-center text-sm lg:text-base font-bold text-gray-600 line-clamp-1">
                                {ele.name}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
