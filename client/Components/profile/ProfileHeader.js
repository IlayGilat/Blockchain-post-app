import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";

const style = {
  wrapper: `border-[#38444d] border-b sticky top-0 bg-[#171717]`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#363636] p-1`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  profileImageContainer: ``,
  profileImage: `object-cover w-[50px] rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  details: `px-3`,
};
const currentAccount = "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788";
function ProfileHeader() {
  const router = useRouter();
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
      <div className={style.backButton} onClick={() => router.push("/")}>
          <BsArrowLeft />
        </div>
      <div className={style.profileImageContainer}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s"
          alt="profile image"
          className={style.profileImage}
        />
      </div>
      <div className={style.details}>
        <div>
          <div className={style.primary}>Ilay Gilat &bull; 4 Tweets</div>
          <div className={style.secondary}>
            {currentAccount && (
              <>
                @{currentAccount.slice(0, 8)}...{currentAccount.slice(-4)}
              </>
            )}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
