"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faHeart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 text-black">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold">
          <Link href="/" className="text-black">
            Phantom
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="px-5 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              size="lg"
            />
          </button>
        </div>

        <ul
          className={`absolute left-0 top-16 z-50 w-full bg-white transition-all duration-300 ease-in-out md:relative md:top-auto md:flex md:w-auto md:space-x-8 md:bg-transparent md:shadow-none ${
            isMobileMenuOpen ? "block" : "hidden md:block"
          }`}
        >
          <li>
            <Link
              href="/shop"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900 md:p-0"
            >
              FICTION WRITING
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900 md:p-0"
            >
              POEMS
            </Link>
          </li>
          <li>
            <Link
              href="/new"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900 md:p-0"
            >
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900 md:p-0"
            >
              CONTACT
            </Link>
          </li>
          <Link
            href={""}
            className="block px-4 py-2 text-gray-600 hover:text-gray-900 md:hidden"
          >
            SIGN IN
          </Link>
          
        </ul>

        <div className="hidden flex-col items-center justify-center text-sm md:flex">
          <Link href={""}>SIGN IN</Link>
         
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
