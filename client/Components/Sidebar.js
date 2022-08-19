import React, { useContext, useState } from "react";
import { MyContext } from "../Context/MyContext";
import { RiHome2Line, RiHome2Fill } from "react-icons/ri";
import { AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { customStyles } from "../lib/constants";
import PostModal from "../Components/Modals/PostModal";
import { IoPersonOutline, IoPerson, IoMailSharp } from "react-icons/io5";
import SidebarOption from "./SidebarOption";
import { useRouter } from "next/router";
import Modal from "react-modal";
import SettingsModal from '../Components/Modals/SettingsModal'
import { BsTwitter, BsFacebook, BsTelegram } from "react-icons/bs";
const style = {
  wrapper: `flex-[1] flex px-8 flex-col `,
  Icon: ` p-3 text-2xl mx-auto flex cursor-pointer hover:bg-[#363636] rounded-[100px]`,
  navContainer: `flex-1`,
  SocialIconContainer: `flex mx-auto items-start`,
  profileButton: `flex items-center mb-6 cursor-pointer rounded-[100px] p-2 hover:bg-[#363636]`,
  profileLeft: `flex item-center justify-center mr-4`,
  WriteButton: `flex items-center font-medium text-xl bg-[#1d9bf0] rounded-[100px] m-6 p-3 px-10 cursor-pointer hover:bg-[#1b8cd8] transition-all hover:duration-200 hover:ease-in-out`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
};
function Sidebar({ initialSelectedIcon = "Home" }) {
  const {accountAddress} = useContext(MyContext)
  const router = useRouter();
  const [isPostModalOpen, setIsPostModalOpen] = useState(Boolean(false));
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(Boolean(false));
  return (
    <div className={style.wrapper}>
      <div className="absolute top-5">
        <div className={style.SocialIconContainer}>
          <div className={style.Icon}>
            <a href="http://twitter.com">
              <BsTwitter />
            </a>
          </div>
          <div className={style.Icon}>
            <a href="http://facebook.com">
              <BsFacebook />
            </a>
          </div>
          <div className={style.Icon}>
            <a href="http://telegram.com">
              <BsTelegram />
            </a>
          </div>
          <div className={style.Icon}>
            <a href="http://instagram.com">
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
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
        <div className={style.WriteButton} onClick={() => setIsPostModalOpen(true)}>
          <div className="mr-4">
            {isPostModalOpen ? <IoMailSharp /> : <AiOutlineMail />}
          </div>
          Post
        </div>
      </div>
      <div className="absolute bottom-2">
        <div className={style.profileButton} onClick={() => setIsSettingsModalOpen(true)}>
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
                @{accountAddress.slice(0, 6)}...{accountAddress.slice(-4)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute text-xs bottom-1 text-[#8899a6]">
        &copy; All Rights Reserved To Ilay Gilat
      </div>
      <Modal
        isOpen={Boolean(isPostModalOpen)}
        onRequestClose={() => setIsPostModalOpen(false)}
        style={customStyles}
      >
        <PostModal setIsPostModalOpen={setIsPostModalOpen} />
      </Modal>
      <Modal
        isOpen={Boolean(isSettingsModalOpen)}
        onRequestClose={() => setIsSettingsModalOpen(false)}
        style={customStyles}
        
      >
        <SettingsModal setIsSettingsModalOpen={setIsSettingsModalOpen} />
      </Modal>

    </div>
  );
}

export default Sidebar;
