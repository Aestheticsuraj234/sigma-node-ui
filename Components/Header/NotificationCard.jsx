"use client"
import Tabs from "./Tabs";
import { BsCheck2All } from "react-icons/bs"
import {MdNotificationAdd} from "react-icons/md"
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import Link from "next/link"


const PreLoggedInNotificationCard = ()=>{
    return(
        <div className="fixed z-50 top-16 right-4 bottom-28 left-auto w-64 max-w-3xl p-4 bg-white border border-gray-100 rounded-lg shadow-lg sm:p-8">
        <div className="flex items-center justify-center mb-2 flex-col">
            <MdNotificationAdd size={50} className="text-gray-600 mt-2 mb-3"/>
            <h5 className="text-xl font-extrabold mb-5 text-gray-700 ">Sign in to see notifications from your favorite tech Creators!</h5>
            <p className="text-xl font-semibold  md:text-sm mb-2"
            >Learn insights from developers and people in tech from around the world. Grow 1% every day.!</p>
        <Link href="/onBoard"  >
           <button className="black_btn flex flex-row justify-center items-center gap-2">
            Let's Start
           </button>
           </Link>
        </div>
        </div>
    )
}



const NotificationCard = () => {
    const { userData } = useContext(GlobalContext);
    console.log("login:", userData);
  
    const { data: session } = useSession();
   
    return (
       (session?.user || userData?.email) ?(  <div className="fixed z-50 top-16 right-3 bottom-28 left-auto w-full max-w-3xl p-4 bg-white border border-gray-100 rounded-lg shadow-lg sm:p-8">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 ">Notifications</h5>
                <span className="text-sm flex gap-2 cursor-pointer font-semibold px-5 py-5 hover:bg-gray-200 rounded-lg leading-none text-green-600  ">Mark All As Read <BsCheck2All size={18} /></span>
                {/* <!-- Heroicon name: chevron-down --> */}
            </div>
            <hr className="bg-gray-600"/>
            <div className="flow-root h-64 ">
                <Tabs/>
            </div>

        </div>):(<PreLoggedInNotificationCard/>)
    );
};

export default NotificationCard;
