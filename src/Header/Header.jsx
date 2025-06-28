import { IconCandle } from "@tabler/icons-react";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import App from "../App";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    // header
    <div className="  relative z-10 flex w-full h-30 bg-[#F3F2F1] text-black p-6  justify-between rounded-b-3xl ">
      {/* icon and name */}
      <div className="flex gap-2 items-center">
        <IconCandle className="h-10 w-10 " stroke={1} />

        <div className="text-3xl font-semibold flex">Sere</div>
      </div>

      {/* navigation */}
      <div className="flex ">
        <div className="flex items-center gap-15 pr-60 text-2xl">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about-us">About</NavLink>
          <NavLink to="/product">Products</NavLink>
        </div>
        <div className="px-2 py-1 text-lg rounded-4xl border border-black hover:bg-rose-50 flex items-center gap-2  ">
          <NavLink to="/contact-us">Contact Us</NavLink>
          <IconArrowNarrowRight className="h-8 w-8" stroke={2.5} />
        </div>
      </div>
    </div>
  );
};

export default Header;
