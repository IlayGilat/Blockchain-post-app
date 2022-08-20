import { useRouter } from "next/router";
import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs";
import {MyContext} from '../../Context/MyContext'
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
function ProfileHeader() {
  const {accountAddress,currentUser} = useContext(MyContext)
  const router = useRouter();
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
      <div className={style.backButton} onClick={() => router.push("/")}>
          <BsArrowLeft />
        </div>
      <div className={style.profileImageContainer}>
        <img
          src={currentUser.NFTs[currentUser.profileImage].image}
          alt="profile image"
          className={style.profileImage}
        />
      </div>
      <div className={style.details}>
        <div>
          <div className={style.primary}>Ilay Gilat &bull; {currentUser.tweets.length} Tweets</div>
          <div className={style.secondary}>
            {accountAddress && (
              <>
                @{accountAddress.slice(0, 8)}...{accountAddress.slice(-4)}
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
