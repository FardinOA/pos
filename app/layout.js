import { Inter } from "next/font/google";
import "./globals.css";
import Cart from "@/component/Cart";
import StoreProvider from "./StoreProvider";
import BottomNav from "@/component/BottomNav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Q Pos | Best point of sale in the market",
    description: "Best point of sale in the market",
};

export default function RootLayout({ children }) {
    return (
        <html data-theme="light" lang="en">
            <body className={`${inter.className}  pb-[4.5rem] lg:pb-0 `}>
                <StoreProvider>
                    <main className=" container overflow-hidden  relative mx-auto grid grid-cols-12 gap-4">
                        <div className="hidden lg:block lg:col-span-5  ">
                            <Cart />
                        </div>
                        <div className=" col-span-12 lg:col-span-7 border-r border-r-gray-300  ">
                            {children}
                        </div>
                    </main>
                    <BottomNav />
                </StoreProvider>
            </body>
        </html>
    );
}
