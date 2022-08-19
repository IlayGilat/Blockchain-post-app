import React from "react";
import ProfileHeader from "../Components/profile/ProfileHeader";
import Sidebar from "../Components/Sidebar";
import ProfileBody from "../Components/profile/ProfileBody";

const style = {
  wrapper: `flex justify-center flex-row h-screen w-screen select-none bg-[#171717] text-white`,
  content: ` w-2/3 flex flex-auto`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-auto no-scrollbar basis-11/12`,
};

function profile() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className="m-auto basis-1/12">
          <Sidebar initialSelectedIcon="Profile" />
        </div>
        <div className={style.mainContent}>
          <ProfileHeader />
            <ProfileBody />
          </div>
        </div>
    </div>
  );
}

export default profile;
