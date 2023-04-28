import { Avatar, Dropdown, Label, Navbar, TextInput } from 'flowbite-react';
import React from "react";
import { HiBell, HiSearch } from 'react-icons/hi';


function NavbarMenu() {
  return (
    <Navbar fluid>
    <div className="w-full p-3 lg:px-5 lg:pl-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">

          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-8"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Flowbite
            </span>
          </Navbar.Brand>
          <form className="ml-16 hidden md:block">
            <Label htmlFor="search" className="sr-only">
              Search
            </Label>
            <TextInput
              icon={HiSearch}
              id="search"
              name="search"
              placeholder="Search"
              required
              size={32}
              type="search"
            />
          </form>
        </div>
        <div className="flex items-center lg:gap-3">
          <div className="flex items-center">
            <button
              onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
              className="cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
            >
              <span className="sr-only">Search</span>
              <HiSearch className="h-6 w-6" />
            </button>

          </div>
          <div className="hidden lg:block">

          </div>
        </div>
      </div>
    </div>
  </Navbar>
  );
}

export default NavbarMenu;
