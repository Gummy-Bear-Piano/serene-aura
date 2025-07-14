import React from "react";
import { IconBrandTwitter } from "@tabler/icons-react";
import { IconBrandFacebook } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandPinterest } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="flex m-10 gap-190 h-10">
      <div className="flex gap-6 text-sm ">
        <p>About Us</p>
        <p>Candle collections</p>
        <p>Home Fragrances</p>
        <p>Contact Us</p>
        <p>About</p>
      </div>

      <div className="flex gap-4 mt-4 md:mt-0 ">
        <IconBrandTwitter stroke={2} />
        <IconBrandFacebook stroke={2} />
        <IconBrandInstagram stroke={2} />
        <IconBrandPinterest stroke={2} />
      </div>
    </footer>
  );
};

export default Footer;
