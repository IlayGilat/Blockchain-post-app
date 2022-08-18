import { useRouter } from "next/router";
import { useState } from "react";

const style = {
    wrapper: `w-min flex items-center rounded-[100px] m-10 p-4 cursor-pointer hover:bg-[#363636] transition-all hover:duration-200 hover:ease-in-out`,
    iconContainer: `text-xl mr-4`,
    textGeneral: `font-medium`,
    textActive: `font-bold`,
  };

function SidebarOption({ text, Icon, setSelected, isActive,redirect }) {
  useState(typeof window === "undefined");

 const router = useRouter();
  return (
    <div
      className={style.wrapper}
      onClick={() => {
        router.push(redirect);
      }}
    >
      <div className={style.iconContainer}>
        <Icon />
      </div>
      <div className={`${isActive ? style.textActive : style.textGeneral}`}>
        {text}
      </div>
    </div>
  );
}
export default SidebarOption;
