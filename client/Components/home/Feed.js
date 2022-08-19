import React from "react";
import PostBox from "./PostBox";
import Post from "../Post";
const tweets = [
  {
    author: {
      name: "ilay",
      walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
    },
    text: "this is my tweet",
    timestamp: new Date(Date.now()).toISOString(),
  },
  {
    author: {
      name: "ilay",
      walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
    },
    text: "this is my tweet",
    timestamp: new Date(Date.now()).toISOString(),
  },
  {
    author: {
      name: "ilay",
      walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
    },
    text: "this is my tweet",
    timestamp: new Date(Date.now()).toISOString(),
  },
  {
    author: {
      name: "ilay",
      walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
    },
    text: "this is my tweet",
    timestamp: new Date(Date.now()).toISOString(),
  },
  {
    author: {
      name: "ilay",
      walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
    },
    text: "this is my tweet",
    timestamp: new Date(Date.now()).toISOString(),
  },
  {
    author: {
      name: "ilay",
      walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
    },
    text: "this is my tweet",
    timestamp: new Date(Date.now()).toISOString(),
  },
  {
    author: {
      name: "ilay",
      walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
    },
    text: "this is my tweet",
    timestamp: new Date(Date.now()).toISOString(),
  },
  {
    author: {
      name: "ilay",
      walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
    },
    text: "this is my tweet",
    timestamp: new Date(Date.now()).toISOString(),
  },
  {
    author: {
      name: "ilay",
      walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
    },
    text: "this is my tweet",
    timestamp: new Date(Date.now()).toISOString(),
  },
];

const style = {
  wrapper: `flex-[2] w-[1372px] border-r border-l border-[#38444d]`,
  header: `sticky top-0 bg-[#171717] p-4 flex justify-between items-center`,
};
function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
      </div>
      <div >
        <PostBox />
      </div>
      <div className="mx-auto">
        {tweets.map((tweet, index) => (
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
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
