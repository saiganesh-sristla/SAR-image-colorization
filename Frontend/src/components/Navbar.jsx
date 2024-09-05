import React, { useState } from "react";
import NavbarList from "./NavbarList";
import NavbarListModbile from "./NavbarListMobile";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  if (menuOpen) {
    return (
      <div className="h-screen w-full bg-slate-500 absolute">
        <img
          className="h-10 md:hidden fixed right-4 top-4"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
          alt="cross image"
        />
        <NavbarListModbile />
      </div>
    );
  }
  return (
    <>
      <div className="bg-slate-800 h-20 flex justify-between sm:gap-60 items-center w-full text-white ">
      <div className="font-bold text-2xl p-4 text-center">
        SAR IMAGE COLORIZATION
      </div>  
        <NavbarList />
        <div className="mr-4">
          <img
            className="h-10 md:hidden"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
            alt="hamburger image"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
