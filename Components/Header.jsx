
"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineCreate } from "react-icons/md";
import { BiGitBranch, BiMoon, BiUserCircle } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import SearchBar from "./SearchBar";
import UpdateCard from "./UpdateCard";
import NotificationCard from "./NotificationCard";

const Header = () => {
  const isLoggedIn = true;
  const notificationCount = 1;
  const {handleToggleNotificationCard,toggleNotificationCard,handleToggleUpdateCard,toggleUpdateCard, toggleDark, toggleMenu, handleToggleMenu, handleToggleDark  , handleToggleSearchBar , toggleSearchBar} = useContext(GlobalContext)

  return (
    <nav className="flex-between w-full mb-10 pt-3">
      <div className="flex gap-2 flex-center">
        <div
          onClick={handleToggleMenu}
          className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-600 transition-all h text-center text-sm font-inter flex items-center justify-center"
        >
          <FiMenu className="text-2xl" />
        </div>
        <Link href={"/"}>
          <Image
            src={"/assests/sigmaRedLogo.svg"}
            alt="Business Logo"
            width={160}
            height={160}
            className="object-contain"
          />
        </Link>
        {toggleMenu && <Sidebar />}
      </div>
      {/* desktop navigation */}
      <div className="sm:flex hidden">
        {isLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <div onClick={handleToggleSearchBar} className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-600 transition-all h text-center text-sm font-inter flex items-center justify-center">
              <AiOutlineSearch className="text-2xl" />
            </div>
            {/* <SearchBar/> */}
            <Link
              href={"/create-post"}
              className="black_btn flex flex-row justify-center items-center gap-2"
            >
              <MdOutlineCreate className="text-2xl" />
              Create
            </Link>
            <div onClick={handleToggleUpdateCard} className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-600 transition-all h text-center text-sm font-inter flex items-center justify-center">
              <BiGitBranch className="text-2xl" />
            </div>
            <div
              onClick={handleToggleDark}
              className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-600 transition-all h text-center text-sm font-inter flex items-center justify-center"
            >
              {toggleDark ? <BiMoon className="text-2xl" /> : <BsSun className="text-2xl" />}
            </div>
            <div className="relative" onClick={handleToggleNotificationCard}>
              <div  className="absolute top-0 right-0 h-5 w-5 bg-red-600 text-white font-bold rounded-full flex items-center justify-center">
                <span id="notification-count" className="text-xs">
                  {notificationCount}
                </span>
              </div>
              <div className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-600 transition-all h text-center text-sm font-inter flex items-center justify-center">
                <IoMdNotificationsOutline className="text-2xl" />
              </div>
            </div>
            <div className="rounded-full border hover:border-gray-500 py-2 px-2 text-gray-600 transition-all h text-center text-sm font-inter flex items-center justify-center">
              <BiUserCircle className="text-2xl" />
            </div>
{toggleSearchBar && <SearchBar/>}
{toggleUpdateCard && <UpdateCard/>}
{toggleNotificationCard && <NotificationCard/>}
          </div>
        ) : (
          <>
            <button type="button" className="black_btn">
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
