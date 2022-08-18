import React from "react";
import { whoToFollow } from "../../lib/static";
const style = {
  wrapper: `flex-[1] flex-col p-4 m-auto`,
  section: ` my-6 rounded-xl overflow-hidden`,
  title: `p-2 font-bold text-lg`,
  item: `flex items-center p-3 my-2 hover:bg-[#363636] cursor-pointer rounded-[100px]`, 
  followAvatarContainer: `mr-3`,
  followAvatar: `rounded-[200px] h-[40px] w-[40px]`,
  profileDetails: `flex-1`,
  name: `font-bold`,
};

const Widgets = () => {
  return (
    <div className={style.wrapper}>

      <div className={style.section}>
        <div className={style.title}>Who to follow</div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widgets;
