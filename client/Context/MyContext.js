import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Alchemy, Network } from "alchemy-sdk";
import { AlchemyConfig } from "alchemy-sdk";
import { config } from "process";
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [accountAddress, setAccountAddress] = useState("");
  const [userNFTs, setUserNFTs] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    tweets: [
      {
        author: {
          name: "ilay",
          walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
          profileImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
        },
        text: "this is my tweet with photo",
        timestamp: new Date(Date.now()).toISOString(),
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
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
    ],
    name: "Unnamed",
    profileImage: 0,
  });
  const [appStatus, setAppStatus] = useState("loading");
  const [posts, setPosts] = useState([
    {
      author: {
        name: "ilay",
        walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
        profileImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
      },
      text: "this is my tweet",
      timestamp: new Date(Date.now()).toISOString(),
      image:"https://i.pinimg.com/originals/cb/f7/83/cbf783e5b7eb3220ad6855fd62c77e65.png",
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
      image:"https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg",

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
  ]);

  const alchemy = new Alchemy(config);

  
  useEffect(() => {
   checkIfWalletIsConnected()
  },[]);

  useEffect(() => {
    getNFTs()
  },[accountAddress])

  

  const getNFTs = async () => {
    console.log("SENT POST REQUEST FOR Alchemy For Account " ,accountAddress);
    try {
      const nfts = await alchemy.nft.getNftsForOwner(accountAddress);
      console.log("nfts: ",nfts)
      const NFTs = nfts["ownedNfts"];
      let FormatedNFTs = [];
      NFTs.map((NFT) => {
        FormatedNFTs.push({ text: NFT.title, image: NFT.media[0].gateway });
      });
      setUserNFTs(FormatedNFTs);
      console.log("user NFTs: " , userNFTs)
      setAppStatus("connected");       

    } catch (e) {
      console.error(e);
    }
  };

  const router = useRouter();

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus("noMetaMask");
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        //connected
        setAccountAddress(addressArray[0]);
        //createUserAccount(addressArray[0]);
      } else {
        //not connected
        router.push("/");
        setAppStatus("notConnected");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setCurrentUserName = (newName) => {
    setCurrentUser({
      ...currentUser,
      name: newName,
    });
  };

  const setCurrentUserNFTPFP = (newNFT) => {
    setCurrentUser({
      ...currentUser,
      profileImage: newNFT,
    });
  };

  const connectToWallet = async () => {
    if (!window.ethereum) return setAppStatus("noMetaMask");
    try {
      setAppStatus("loading");
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (addressArray.length > 0) {
        setAccountAddress(addressArray[0]);
        setAppStatus("connected");
      } else {
        router.push("/");
        setAppStatus("notConnected");
      }
    } catch (error) {
      setAppStatus("error");
    }
  };

  return (
    <MyContext.Provider
      value={{
        accountAddress,
        setAccountAddress,
        currentUser,
        setCurrentUser,
        setCurrentUserName,
        posts,
        setPosts,
        appStatus,
        setAppStatus,
        connectToWallet,
        userNFTs,
        setCurrentUserNFTPFP,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
