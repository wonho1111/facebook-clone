/*
lee wonho
facebook clone project Sidebar component
2022 08 13
*/

import React from "react";
import Image from "next/image";
import Sidebaritems from "./Sidebaritems";
import { BiUserCircle, BiGroup } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineOndemandVideo, MdExpandMore } from "react-icons/md";
import { ImStopwatch } from "react-icons/im";

const Sidebar = () => {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/44/44646.png"
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">Lee wonho</p>
      </div>

      <Sidebaritems Icon={BiUserCircle} value="Friends" />
      <Sidebaritems Icon={BiGroup} value="Groups" />
      <Sidebaritems Icon={FiShoppingBag} value="Market" />
      <Sidebaritems Icon={MdOutlineOndemandVideo} value="Watch" />
      <Sidebaritems Icon={ImStopwatch} value="Memories" />
      <Sidebaritems Icon={MdExpandMore} value="See More" />
    </div>
  );
};

export default Sidebar;
