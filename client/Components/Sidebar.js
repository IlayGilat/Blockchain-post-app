import React from 'react'
import { useState } from "react";
import { RiHome2Line, RiHome2Fill } from "react-icons/ri";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import SidebarOption from "./SidebarOption";
import { useRouter } from "next/router";


const style = {
    wrapper: `flex-[0.7] flex px-8 flex-col`,
    twitterIconContainer: `text-3xl m-4`,
    tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
    navContainer: `flex-1`,
    profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
    profileLeft: `flex item-center justify-center mr-4`,
    profileImage: `height-12 w-12 rounded-full`,
    profileRight: `flex-1 flex`,
    details: `flex-1`,
    name: `text-lg`,
    handle: `text-[#8899a6]`,
    moreContainer: `flex items-center mr-2`,
  };
const account = "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788";
function Sidebar({ initialSelectedIcon = "Home" }) {
  const router = useRouter();

  return (
    <div className={style.wrapper}>
      <div className={style.navContainer}>
        <SidebarOption
          Icon={initialSelectedIcon === "Home" ? RiHome2Fill : RiHome2Line}
          text="Home"
          isActive={Boolean(initialSelectedIcon === "Home")}
          redirect={"/"}
        />
        <SidebarOption
          Icon={initialSelectedIcon === "Profile" ? IoPerson : IoPersonOutline}
          text="Profile"
          isActive={Boolean(initialSelectedIcon === "Profile")}
          redirect={"/profile"}
        />
      </div>
      <div className="absolute bottom-0">
        <div className={style.profileButton}>
          <div className={style.profileLeft}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s"
              alt="profile"
              className={style.profileImage}
            />
          </div>
          <div className={style.profileRight}>
            <div className={style.details}>
              <div className={style.name}>Ilay Gilat</div>
              <div className={style.handle}>
                @{account.slice(0, 6)}...{account.slice(-4)}
              </div>
            </div>
            <div className={style.moreContainer}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
