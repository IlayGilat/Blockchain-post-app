import React from "react";
import { whoToFollow } from "../../lib/static";
const style = {
  wrapper: `p-4 my-auto`,
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
  return (
    <div className={style.wrapper}>

      <div className={style.section}>
        <div className={style.title}>You Might Like</div>
        {whoToFollow.map((item, index) => (
          <div key={index} className={style.item}>
            <div className={style.followAvatarContainer}>
              <img
                src={item.avatar}
                alt={item.handle}
                className={style.followAvatar}
              />
            </div>
            <div className={style.profileDetails}>
              <div className={style.name}>{item.name}</div>
              <div className={style.handle}> @{item.address.slice(0, 6)}...{item.address.slice(-4)}</div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widgets;
