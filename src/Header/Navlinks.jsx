// import React from "react";
// import { use } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navlinks = () => {
//   const links = [
//     { name: "Home Page", url: "/home-page" },
//     { name: "Product Page", url: "/product-page" },
//     { name: "About Us", url: "/about-us" },
//     { name: "Contact Us", url: "/contact-us" },
//   ];

//   const location = useLocation();

//   return (
//     <div className="flex gap-9 text-black font-medium items-center">
//       {links.map((link, index) => {
//         const isActive = location.pathname === link.url;

//         return (
//           <div
//             key={index}
//             className={`${
//               isActive ? "border-white text-black" : "border-transparent"
//             } border-t-[3px] h-full flex items-center flex`}
//           >
//             <Link to={link.url}>{link.name}</Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Navlinks;
