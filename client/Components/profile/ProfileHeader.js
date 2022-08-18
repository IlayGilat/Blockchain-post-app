import { useRouter } from "next/router";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useContext } from "react";

const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  activeNav: `text-white`,
};
const currentAccount = "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788"
 function ProfileHeader(){
  const router = useRouter();
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.backButton} onClick={() => router.push("/")}>
          <BsArrowLeft />
        </div>
        <div className={style.details}>
          <div className={style.primary}>Ilay Gilat</div>
          <div className={style.secondary}>4 Tweets</div>
        </div>
      </div>
     
        <div className={style.profileImageContainer}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s"
            alt="profile image"
            className={ style.profileImage}
            />
        </div>
        <div className={style.details}>
          <div>
            <div className={style.primary}>Ilay Gilat</div>
            <div className={style.secondary}>{currentAccount && (
              <>
              @{currentAccount.slice(0,8)}...{currentAccount.slice(-4)}
              </>
            )}</div>
          </div>
        </div>
       
    </div>
  );
}

export default ProfileHeader;
