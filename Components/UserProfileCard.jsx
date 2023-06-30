"use client"
import { BiSolidUserCircle, BiLogIn, BiBookContent } from "react-icons/bi";
import { RiDraftLine } from "react-icons/ri";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdOutlineManageAccounts } from "react-icons/md";
import Image from "next/image"; 
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useEffect } from "react"


const MenuList = [
  { Title: "My Draft", icon: <RiDraftLine size={25} /> },
  { Title: "My Bookmark", icon: <BsJournalBookmarkFill size={25} /> },
  { Title: "Account", icon: <MdOutlineManageAccounts size={25} /> },
  { Title: "Your Content", icon: <BiBookContent size={25} /> },
];
                


const PreLogin = () => {
  const router = useRouter();

  return (
    <div className="fixed z-50 top-16 right-3 bottom-28 left-auto w-full max-w-md p-4 glassmorphism border border-gray-100 rounded-lg shadow-lg sm:p-8">
      <div className="flex items-center justify-center mb-2 flex-col">
        <span className="text-sm mb-3 text-center flex gap-2 cursor-pointer font-semibold rounded-lg leading-none text-gray-700">
          <BiSolidUserCircle size={100} />
        </span>
        <h3 className="text-2xl text-center flex gap-2 cursor-pointer font-bold rounded-lg text-gray-700 mb-3">
          Create an Account or log in to your Sigmanode account
        </h3>
        <p className="text-green-600 font-medium">Takes only a few seconds</p>
      </div>

      <div className="flex justify-center items-center flex-col gap-y-3">
        <button
          type="button"
          className="py-2.5 w-32 mr-2 mb-2 text-sm font-bold flex flex-row justify-center items-center gap-4 text-white focus:outline-none bg-gradient-to-r from-rose-700 to-pink-600 rounded-lg"
        >
          <BiLogIn size={20} />
          Login
        </button>
        <button
          type="button"
          onClick={() => router.push('/onBoard')}
          className="py-2.5 w-32 mr-2 mb-2 text-sm font-bold text-black focus:outline-none border-2 border-red-300 rounded-lg"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

const PostLogin = () => {
  const router = useRouter();
  const { data: session, status } = useSession()
  const { data: providers } = getProviders()

 
 

  return (
    <div className="fixed z-50 top-16 right-3 bottom-28 left-auto w-96 scrollbar scrollbar-track-slate-200 scrollbar-w-2 scrollbar-track-rounded-full scrollbar-thumb-black/30 scrollbar-thumb-rounded-full max-w-md bg-white border border-gray-100 rounded-lg shadow-lg sm:p-8 overflow-y-auto">
      <div className="flex items-start justify-start mb-1 hover:bg-gray-100 py-5 px-4 rounded-lg">
        <Image
            src={session?.user.image}
          alt="Profile Image"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="flex flex-col justify-start items-start px-3">
          <span className="text-sm flex cursor-pointer font-bold rounded-lg text-gray-600">
            {session?.user?.name}
          </span>
          <p className="cursor-pointer font-bold text-base text-gray-700">{session?.user?.email}</p>
        </div>
      </div>
      <hr className="bg-gray-600" />
      <div className="flow-root hover:bg-gray-100 py-5 px-4 rounded-lg mb-2">
        <h3 className="font-extrabold text-red-500 cursor-pointer text-sm">Start Personal Page📝</h3>
        <p className="font-normal text-xs text-gray-500">Sigma lets you create your own developer-specific page for your audience!</p>
      </div>
      <div className="overflow-y-auto max-h-40 scrollbar scrollbar-track-slate-200 scrollbar-w-1 scrollbar-track-rounded-full scrollbar-thumb-black/30 scrollbar-thumb-rounded-full">
        <ul role="list" className="divide-y">
          {MenuList.map((data, index) => (
            <Link href="#" key={index} className="block py-3 sm:py-4 hover:bg-white/50 px-3 rounded-md">
              <div className="flex flex-row justify-start items-center gap-2 text-gray-500">
                {data.icon}
                <p className="text-base font-bold text-gray-500">{data.Title}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <hr className="bg-gray-600" />
      <div className="flex flex-row justify-center mt-2 bg-gradient-to-r from-rose-700 to-pink-600 gap-2 items-center py-5 px-4 rounded-lg text-white">
        <span className="text-white">
          <HiOutlineLogout size={20} />
        </span>
        <h3 onClick={()=>signOut()} className="font-extrabold text-white cursor-pointer text-sm">Logout</h3>
      </div>
    </div>
  );
};

const UserProfileCard = () => {
  const router = useRouter();
  const userisLoggedIn = false;
  const { data: session, status } = useSession()
  return session?.user ? <PostLogin /> : <PreLogin />;
};

export default UserProfileCard;
