import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Alchemy, Network } from "alchemy-sdk";
import { AlchemyConfig } from "alchemy-sdk";
import { config } from "process";
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [accountAddress, setAccountAddress] = useState(
    "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788"
  );
  const [userNFTs, setUserNFTs] = useState([
    {
      text: "Squod #21",
      image:
        "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
    },
    {
      text: "Fuckawaii #377",
      image:
        "https://lh3.googleusercontent.com/z6_q9nNuhnkFZKCVWbPaWFjwwduU_lmz2yd98_0vIzLAeFC8qWls42oqb096SWS38L0UOKh9MXjXS9Dr7NIkP_yvgcQr3U13e3VDUQ=w600",
    },
    {
      text: "PsyBulls #101",
      image:
        "https://lh3.googleusercontent.com/eo470vZzfmJCl0PcmX5hoLp3xyiUb01GnMbObIUKqRjvNBLw9Gnu3FjvU64qRDaqczSX7j__3augpO32Y3mHioOPJ-ly8Xc7w-A1Nw=w600",
    },
    {
      text: "Squod #21",
      image:
        "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
    },
    {
      text: "Squod #21",
      image:
        "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
    },
    {
      text: "Squod #21",
      image:
        "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
    },
    {
      text: "Squod #21",
      image:
        "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
    },
    {
      text: "Squod #21",
      image:
        "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
    },
    {
      text: "Squod #21",
      image:
        "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
    },
    {
      text: "Squod #21",
      image:
        "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
    },
  ]);
  const [currentUser, setCurrentUser] = useState({
    tweets: [
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
    ],
    name: "Ilay Gilat",
    NFTs: userNFTs,
    walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
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
  ]);

  const alchemy = new Alchemy(config)
  const getNFTs= async () => {
    console.log("SENT POST REQUEST FOR Alchemy")
    try{
    const nfts = await alchemy.nft.getNftsForOwner(accountAddress)
    const NFTs = nfts["ownedNfts"]
    let FormatedNFTs= [];
    NFTs.map(NFT =>{
      FormatedNFTs.push({text:NFT.title,image:NFT.media[0].gateway})
    })
    setUserNFTs(FormatedNFTs)
    }catch(e){
      console.error(e)
    }
  }

  const router = useRouter();
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus("noMetaMask");
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        //connected
        setAccountAddress(addressArray[0]);
        await getNFTs()
        setAppStatus("connected")
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
      profileImage: newNFT
    })

  }

  const connectToWallet = async () => {
    if (!window.ethereum) return setAppStatus("noMetaMask");
    try {
      setAppStatus("loading");
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (addressArray.length > 0) {
        setAppStatus("connected");
        setAccountAddress(addressArray[0]);
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
        setCurrentUserNFTPFP
        
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
