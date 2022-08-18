import React from "react";
import ProfileHeader from "../Components/profile/ProfileHeader";
import ProfileTweets from "../Components/profile/ProfileTweets";
import Sidebar from "../Components/Sidebar";

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#171717] text-white`,
  content: ` w-2/3 flex flex-auto`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-auto no-scrollbar`,
};

function profile() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className=" m-auto">
          <Sidebar initialSelectedIcon="Profile" />
        </div>
        <div className={style.mainContent}>
          <ProfileHeader />
            <ProfileTweets />
        </div>
      </div>
    </div>
  );
}

export default profile;
