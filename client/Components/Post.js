import React from "react";
import { format } from "timeago.js";
import Image from "next/image";
import { useRouter } from "next/router";
const style = {
  wrapper: `flex p-3 border w-2/3 m-auto mt-10 border-[#38444d] rounded-[15px]`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center`,
  name: `font-bold mr-1`,
  verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6] ml-1`,
  tweet: `my-2`,
  image: `rounded-3xl`,
  footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon: `rounded-full text-lg p-2`,
  postImage: `w-1/2 m-auto outline outline-offset-4 outline-1 outline-[#38444d]`
};
const Post = ({ displayName, userName, text, avatar, timestamp, postImage,re}) => {
  const router = useRouter()
  return (
    <div className={style.wrapper}>
      <div>
        {re ? 
        <img src={avatar} alt={userName} className={`${style.profileImage} cursor-pointer`} onClick={() => {router.push(re)}}/>
        :
        <img src={avatar} alt={userName} className={style.profileImage}/>
}
      </div>
      <div className={style.postMain}>
        <div>
          <span className={style.headerDetails}>
            <span className={style.name}>{displayName}</span>
            <span className={style.handleAndTimeAgo}>
              @{userName} · {format(new Date(timestamp).getTime())}
            </span>
          </span>
          <div className={style.tweet}>{text}</div>
          {
            postImage ? (
              <div>
              <img src={postImage} alt={userName} className={style.postImage}/>
              </div>
            ) : <></>
          }
        </div>
      </div>
    </div>
  );
};

export default Post;
