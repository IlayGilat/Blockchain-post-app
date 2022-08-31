import React, { useContext } from "react";
import PostBox from "./PostBox";
import Post from "../Post";
import { MyContext } from "../../Context/MyContext";


const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#171717] p-4 flex justify-between items-center`,
};
function Feed() {
  const {posts} = useContext(MyContext) 
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
      </div>
      <div >
        <PostBox />
      </div>
      <div className="mx-auto">
        {posts.map((tweet, index) => (
          <Post
            key={index}
            displayName={
              tweet.author.name === "Unnamed"
                ? `${tweet.author.walletAddress.slice(
                    0,
                    4
                  )}...${tweet.author.walletAddress.slice(41)}`
                : tweet.author.name
            }
            userName={`${tweet.author.walletAddress.slice(
              0,
              4
            )}...${tweet.author.walletAddress.slice(41)}`}
            text={tweet.text}
            avatar={tweet.author.profileImage}
            timestamp={tweet.timestamp}
            postImage={tweet.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
