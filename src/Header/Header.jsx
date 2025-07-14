import { IconCandle, IconX } from "@tabler/icons-react";

import { IconArrowNarrowRight, IconMenu2 } from "@tabler/icons-react";
import App from "../App";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuopen] = useState(false);
  return (
    <div className="m-4 xl:m-8 ">
      {/* // header */}
      <div className="relative z-10 flex w-full h-25 bg-[#F3F2F1] text-black xl:p-6  justify-between rounded-full items-center ">
        {/* icon and name */}
        <div className="flex gap-2 items-center">
          <img
            className="h-14 w-14 xl:h-20 xl:w-20"
            src="./Images/logs.png"
            alt=""
          />

          <div className="text-2xl xl: text:3xl   font-semibold font-serif">
            Sere
          </div>
        </div>

        {/* navigation  for xl+*/}
        <div className="flex ">
          <div className="hidden xl:flex items-center gap-12 pr-20 text-xl">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about-us">About</NavLink>
            <NavLink to="/product">Products</NavLink>
          </div>

          {/* contact us for xl+ */}
          <div className=" hidden xl:flex px-3 py-1 text-lg rounded-full border border-black hover:bg-rose-50  items-center gap-2  ">
            <NavLink to="/contact-us">Contact Us</NavLink>
            <IconArrowNarrowRight className="h-6 w-6" stroke={2.5} />
          </div>
          {/* hamburger menu for mobile */}

          <div>
            <button onClick={() => setMenuopen(!menuOpen)}>
              {menuOpen ? (
                <IconX className="w-8 h-8" />
              ) : (
                <IconMenu2 className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
    </div>
  );
};

export default Header;
