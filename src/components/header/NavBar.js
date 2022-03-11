import React from "react";
import { Link } from "react-router-dom";
export default function NavBar({ isLogin }) {
  const navbarItems = [
    { id: 1, name: "Home", link: "/tarabol-app-front-end-web/homepage" },
    {
      id: 2,
      name: "Marketplace",
      link: "/tarabol-app-front-end-web/marketplace",
    },
  ];

  return (
    <div className=" sm:hidden md:flex items-center">
      <ul className="flex">
        {isLogin === false ? (
          <li className="relative text-xl mx-[1rem] font-[600] after:absolute after:w-[100%] after:bg-[#a8b1ff] after:h-[4px] after:left-0 after:bottom-[-8px] after:rounded after:hidden active:after:block hover:after:block">
            <Link to="/tarabol-app-front-end-web/marketplace">Marketplace</Link>
          </li>
        ) : (
          <>
            {navbarItems.map((item) => (
              <li
                key={item.id}
                className="relative text-xl mx-[1rem] font-[600] after:absolute after:w-[100%] after:bg-[#a8b1ff] after:h-[4px] after:left-0 after:bottom-[-8px] after:rounded after:hidden active:after:block hover:after:block"
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
}
