"use client"
import Link from "next/link"
import { useState } from "react"
import { useSession, signIn, signOut } from 'next-auth/react';
const Navbar = () => {
  const { data: session } = useSession();
  const [showDropdown, setshowDropdown] = useState(false)
  

  return (
    <nav className="sticky top-0 z-[1000] bg-transparent flex flex-wrap p-1 items-center md:p-2 2xl:p-4 border-b-[1px] border-yellow-500 backdrop-blur-sm text-white justify-around">
      <div className="px-2 py-1 hover:underline hover:cursor-pointer text-2xl">
        <Link href={"/"}> <span className="text-green-200"><b className="text-green-400">P</b>atre</span><span className="text-red-300">on</span></Link>
      </div>
      <div className="flex gap-2 justify-center items-center">
        {session && <>
          <button onClick={() => { setshowDropdown(!showDropdown);}} onBlur={()=>setTimeout(() => {
            setshowDropdown(false);
          }, 300)}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white relative bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mx-4 px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button">Welcome {session.user.email.split('@')[0]}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            ><path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              /></svg>
          </button>
          {/* Dropdown menu */}
          <div
            id="dropdown"
            className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-[100%] ${showDropdown ? "" : "hidden"}`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <Link href={"/"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Home</Link>
              </li>
              <li>
                <Link href={"/dashboard"} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Dashboard</Link>
              </li>
              <li>
                <Link
                  href={"/settings"}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Light-Mode
                </Link>
              </li>
              <li>
                <Link
                  href={`/${session.user.name}`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <span onClick={() => {signOut()}}
                  className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:cursor-pointer">Sign out</span>
              </li>
            </ul>
          </div>
        </>}
        {session ? "" : <Link href={"/login"} className="hover:bg-blue-800 transition-all text-white font-semibold bg-blue-600 px-2 py-1">Login/Signup</Link>}
      </div>


    </nav>
  )
}

export default Navbar
