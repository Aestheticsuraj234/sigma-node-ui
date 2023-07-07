"use client"
import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import {  MdOutlineCreate } from "react-icons/md";
import { BiGitBranch, BiMoon,  BiSolidBookContent,  BiUserCircle } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { BsBookmarkHeart, BsSun } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import SearchBar from "./SearchBar";
import UpdateCard from "./UpdateCard";
import NotificationCard from "./NotificationCard";
import UserProfileCard from "./UserProfileCard";
import { useSession } from "next-auth/react"
import SigmaLogoHeader from "./SigmaLogoHeader";
import { usePathname } from "next/navigation";


const BottomNavigation = () => {
  return (
    <div className="md:hidden fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-lg bg-white border border-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600">
      <div className="md:hidden flex justify-around items-center gap-4 mx-3 my-6 ">
        {/* Make a list of Icons and name of their navigation below */}
        <div className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-700 transition-all h text-center text-sm font-inter flex items-center justify-center">
          <Link href={"/"}>
            <BiSolidBookContent className="text-2xl text-gray-700 dark:text-gray-400" />
           
          </Link>
        </div>
        <div className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-700 transition-all h text-center text-sm font-inter flex items-center justify-center">
          <Link href={"#"}>
            <BsBookmarkHeart className="text-2xl text-gray-700 dark:text-gray-400" />
        
          </Link>
        </div>
        <div className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-700 transition-all h text-center text-sm font-inter flex items-center justify-center">
          <Link href={"#"}>
            <AiOutlineSearch className="text-2xl text-gray-700 dark:text-gray-400" />
         
          </Link>
        </div>
        <Link href={"#"}  className="flex flex-col items-center justify-center ">
        <div className="md:hidden relative " >
              <div className="absolute  top-0 right-0 h-5 w-5 bg-red-600 text-white font-bold rounded-full flex items-center justify-center">
                <span id="notification-count" className="text-xs">
                  1
                </span>
              </div>
              <div className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-700 transition-all h text-center text-sm font-inter flex items-center justify-center">
                <IoMdNotificationsOutline className="text-2xl" />
              </div>
            </div>
</Link>



      </div>
    </div>
  )

}


const Header = () => {
  const { data: session } = useSession();
  const { userData } = useContext(GlobalContext);
  const pathname = usePathname();
  console.log(pathname);

  const notificationCount = 1;
  const {
    handleToggleUserProfile,
    toggleUserProfile,
    handleToggleNotificationCard,
    toggleNotificationCard,
    handleToggleUpdateCard,
    toggleUpdateCard,
    toggleDark,
    toggleMenu,
    handleToggleMenu,
    handleToggleDark,
    handleToggleSearchBar,
    toggleSearchBar,
  } = useContext(GlobalContext);

  if (pathname === "/onBoard" || pathname === "/login") {
    return (
      <SigmaLogoHeader />
    );
  } else {
    return (
      <nav className="flex-between w-full mb-10 pt-3">
        <div className="flex gap-2 flex-center">
          <div
            onClick={handleToggleMenu}
            className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-700 transition-all h text-center text-sm font-inter flex items-center justify-center"
          >
            <FiMenu className="text-2xl" />
          </div>
          <Link href={"/"}>
            <Image
              src={"/assests/sigmaRedLogo.svg"}
              alt="Business Logo"
              width={160}
              height={160}
              className="object-contain sm:flex hidden"
            />
          </Link>
          {toggleMenu && <Sidebar />}
        </div>
        {/* desktop navigation */}
        <div className="flex">
          <div className="flex gap-3 md:gap-5">
            <div
              onClick={handleToggleSearchBar}
              className="rounded-full md:flex hidden border hover:border-gray-500 py-2 px-2 text-gray-700 transition-all h text-center text-sm font-inter  items-center justify-center"
            >
              <AiOutlineSearch className="text-2xl" />
            </div>
            <Link
              href={"/create-post"}
              className="black_btn flex flex-row justify-center items-center gap-2"
            >
              <MdOutlineCreate className="text-2xl" />
              <span className="md:flex hidden">Create</span>
            </Link>
            <div
              onClick={handleToggleUpdateCard}
              className="rounded-full md:flex hidden border hover:border-gray-500 py-2 px-2 text-gray-700 transition-all h text-center text-sm font-inter  items-center justify-center"
            >
              <BiGitBranch className="text-2xl" />
            </div>
            <div
              onClick={handleToggleDark}
              className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-700 transition-all h text-center text-sm font-inter flex items-center justify-center"
            >
              {toggleDark ? (
                <BiMoon className="text-2xl" />
              ) : (
                <BsSun className="text-2xl" />
              )}
            </div>
            <div className="md:relative hidden " onClick={handleToggleNotificationCard}>
              <div className="absolute  top-0 right-0 h-5 w-5 bg-red-600 text-white font-bold rounded-full flex items-center justify-center">
                <span id="notification-count" className="text-xs">
                  {notificationCount}
                </span>
              </div>
              <div className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-700 transition-all h text-center text-sm font-inter flex items-center justify-center">
                <IoMdNotificationsOutline className="text-2xl" />
              </div>
            </div>
            <div
              onClick={handleToggleUserProfile}
              className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-700 transition-all h text-center text-sm font-inter flex items-center justify-center"
            >
              {session?.user || userData?.email ? (
                <Image
                  src={session?.user.image || `/assests/UserProfileLogo.png`}
                  alt="Profile Image"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              ) : (
                <BiUserCircle className="text-2xl" />
              )}
            </div>
            {toggleSearchBar && <SearchBar />}
            {toggleUpdateCard && <UpdateCard />}
            {toggleNotificationCard && <NotificationCard />}
            {toggleUserProfile && <UserProfileCard />}
          </div>
        </div>
        {/* ?Mobile Bottom navigation and wanted to flow bottom of the screen */}

        <BottomNavigation />

      </nav>);
  }
};

export default Header;
