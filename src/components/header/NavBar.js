import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  const navbarItems = [
    { id: 1, name: "Home Page", link: "/tarabol-app-front-end-web" },
    { id: 2, name: "Your Library", link: "/tarabol-app-front-end-web/library" },
    { id: 3, name: "Communication", link: "/" },
  ];

  return (
    <div className="ml-[6rem] flex items-center">
      <ul className="flex">
        {navbarItems.map((item) => (
          <li
            key={item.id}
            className="relative text-xl mx-[1rem] font-[600] after:absolute after:w-[100%] after:bg-[#a8b1ff] after:h-[4px] after:left-0 after:bottom-[-8px] after:rounded after:hidden active:after:block hover:after:block"
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
