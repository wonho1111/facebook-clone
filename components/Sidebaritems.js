/*
lee wonho
facebook clone project Sidebaritems component
2022 08 15
*/

import React from "react";

const Sidebaritems = ({ Icon, value }) => {
  return (
    <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 roundeed-l-xl cursor-pointer">
      <Icon className="h-8 w-8 text-gray-600 " />
      <p className="hidden sm:inline-flex font-medium">{value}</p>
    </div>
  );
};

export default Sidebaritems;
