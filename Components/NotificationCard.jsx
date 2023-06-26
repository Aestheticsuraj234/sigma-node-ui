"use client";
import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import Link from "next/link";
import Tabs from "./Tabs";
import { BsCheck2All } from "react-icons/bs"
const NotificationCard = () => {
    const { handleToggleUpdateCard, toggleUpdateCard } = useContext(GlobalContext);
 


    return (
        <div className="fixed top-16 right-3 bottom-28 left-auto w-full max-w-3xl p-4 bg-white border border-gray-100 rounded-lg shadow-lg sm:p-8">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 ">Notifications</h5>
                <span className="text-sm flex gap-2 cursor-pointer font-semibold px-5 py-5 hover:bg-gray-200 rounded-lg leading-none text-green-600  ">Mark All As Read <BsCheck2All size={18} /></span>
                {/* <!-- Heroicon name: chevron-down --> */}
            </div>
            <hr className="bg-gray-600"/>
            <div className="flow-root h-64 ">
                {/* <ul role="list" className="divide-y divide-gray-200">

                    <Link href="#" className="block py-3 sm:py-4 hover:bg-white/50 px-3 rounded-md">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <span className="bg-green-600 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                    New
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    data.Heading
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                    data.SubHeading
                                </p>
                            </div>
                        </div>
                    </Link>

                </ul> */}
                <Tabs/>
            </div>

        </div>
    );
};

export default NotificationCard;
