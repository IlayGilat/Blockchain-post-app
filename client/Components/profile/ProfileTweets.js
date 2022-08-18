import React, { useEffect, useState } from 'react'
import Post from '../Post'
import { useContext } from 'react'
const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

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
const currentAccount = "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788"

function ProfileTweets() {

  return (
    <div className={style.wrapper}>
      {
        tweets.map((tweet,index) => (
          <Post 
          key={index}
          displayName="Ilay Gilat"
          userName={`${currentAccount.slice(0,4)}...${currentAccount.slice(-4)}`}
          text={tweet.text}
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s"
          timestamp={tweet.timestamp}
          />
        ))
      }
    </div>
  )
}

export default ProfileTweets