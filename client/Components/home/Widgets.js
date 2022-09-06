import { useRouter } from "next/router";
import React,{useContext,useState,useEffect} from "react";
import { MyContext } from "../../Context/MyContext";
const style = {
  wrapper: `flex-[3] p-4 my-auto`,
  section: ` my-6 rounded-xl overflow-hidden`,
  title: `p-2 font-bold text-lg`,
  item: `flex items-center p-3  w-[250px] h-[100px] hover:bg-[#363636] cursor-pointer rounded-[100px] hover:duration-200 hover:ease-in-out`, 
  followAvatarContainer: `mr-3`,
  followAvatar: `rounded-[100px] h-[50px] w-[50px]`,
  profileDetails: `flex-1`,
  name: `font-bold`,
  handle: `text-[#8899a6]`,

};
const Widgets = () => {
  const router = useRouter()
  const {fetchUsers} = useContext(MyContext)
  const [whoToFollow,setWhoToFollow] = useState()
  useEffect(()=>{
    const fetch = async () => {
  setWhoToFollow(await fetchUsers() )
    }
  fetch()
  },[whoToFollow])
  return (
    whoToFollow ? 
    <div className={style.wrapper}>

      <div className={style.section}>
        <div className={style.title}>You Might Like</div>
        {whoToFollow.map((item, index) => (
          index < 5 ?
          <div key={index} className={style.item} onClick = { () => {router.push(`/profile/id=${item.walletAddress}`)}}>
            <div className={style.followAvatarContainer}>
              <img
                src={item.nfts[item.profileImage].image}
                alt={item.handle}
                className={style.followAvatar}
              />
            </div>
            <div className={style.profileDetails}>
              <div className={style.name}>{item.name}</div>
              <div className={style.handle}> @{item.walletAddress.slice(0, 6)}...{item.walletAddress.slice(-4)}</div>
            </div>
            
          </div>
          : <></>
        ))}
      </div>
    </div>
    : <></>
  );
};

export default Widgets;
