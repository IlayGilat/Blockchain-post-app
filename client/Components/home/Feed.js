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
        {posts.map((post, index) => (
          <Post
            key={index}
            displayName={
              post.author.name === "Unnamed"
                ? `${post.author.walletAddress.slice(
                    0,
                    4
                  )}...${post.author.walletAddress.slice(41)}`
                : post.author.name
            }
            userName={`${post.author.walletAddress.slice(
              0,
              4
            )}...${post.author.walletAddress.slice(41)}`}
            text={post.text}
            re={`/profile/id=${post.author.walletAddress}`}
            avatar={post.author.profileImage}
            timestamp={post.timestamp}
            postImage={post.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
