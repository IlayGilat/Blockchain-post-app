import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Alchemy, Network } from "alchemy-sdk";
import { AlchemyConfig } from "alchemy-sdk";
import { config } from "process";
import { client } from "../lib/client";
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [accountAddress, setAccountAddress] = useState("");
  const [userNFTs, setUserNFTs] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [appStatus, setAppStatus] = useState("loading");
  const [posts, setPosts] = useState([]);

  const [ranNFTs, setRanNFTs] = useState(false);
  const [ranCreateUser,setRanCreateUser] = useState(false);
  const [ranFetchPost,setRanFetchPost] = useState(false)
  const [ranFetchUser,setRanFetchUser] = useState(false)
  const router = useRouter();
  const alchemy = new Alchemy(config);

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    if (!accountAddress) return;
    getNFTs();
  }, [accountAddress]);

  useEffect(() => {
    if (!ranNFTs) return;
    createUserAccount();
  }, [ranNFTs]);

  useEffect(() => {
    if(!ranCreateUser) return;
    getUserDetails();
  }, [ranCreateUser]);

  useEffect(() => {
    if(!ranFetchUser) return;
    fetchPosts();
  }, [ranFetchUser]);

  useEffect(() => {
    if(!ranFetchPost) return
    setAppStatus("connected")
  },[ranFetchPost])


  const getNFTs = async () => {
    try {
      const nfts = await alchemy.nft.getNftsForOwner(accountAddress);
      const NFTs = nfts["ownedNfts"];
      let FormatedNFTs = [];
      NFTs.map((NFT) => {
        FormatedNFTs.push({ text: NFT.title, image: NFT.media[0].gateway });
      });
      setUserNFTs(FormatedNFTs);
      setRanNFTs(true);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchPosts = async () => {
    const query = `
    *[_type == "posts"]{
      "author": author->{name,walletAddress,profileImage,nfts},
      postText,
      image,
      timestamp
    } | order(timestamp desc)
    `;

    const sanityResponse = await client.fetch(query);

    setPosts([]);

    sanityResponse.forEach(async (item) => {
      const newItem = {
        text: item.postText,
        timestamp: item.timestamp,
        image: item.image,
        author: {
          name: item.author.name,
          walletAddress: item.author.walletAddress,
          profileImage: item.author.nfts[item.author.profileImage].image,
        },
      };
      setPosts((prevState) => [...prevState, newItem]);
    });
    setRanFetchPost(true)
  };

  const fetchUsers= async ()=>{
    const query= `*[_type == "users" ]{
      name,
        walletAddress,
        nfts,
        profileImage,
          }`

          return await client.fetch(query)
  }
  const getUserDetails = async (userAccount = accountAddress) => {
    const query = `
    *[_type == "users" && _id == "${userAccount}"]{
      "posts": posts[]->{timestamp, postText,image}|order(timestamp desc),
      name,
      profileImage,
      nfts,
      walletAddress
    }
    `;
    const sanityResponse = await client.fetch(query)

    const postQuery = `
    *[_type == "posts" && author._ref == "${userAccount}" ]|order(timestamp desc){
      postText,
        author,
        image,
        timestamp,
          }
    `
    const postSanityResponse = await client.fetch(postQuery)
    setCurrentUser({
      posts: postSanityResponse,
      name: sanityResponse[0].name,
      profileImage: sanityResponse[0].profileImage,
    });
    setRanFetchUser(true)
    return {
      posts: postSanityResponse,
      name: sanityResponse[0].name,
      profileImage: sanityResponse[0].profileImage,
      nfts: sanityResponse[0].nfts,
      walletAddress: sanityResponse[0].walletAddress,
    }
  };
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus("noMetaMask");
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        //connected
        setAccountAddress(addressArray[0]);
      } else {
        //not connected
        router.push("/");
        setAppStatus("notConnected");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createUserAccount = async (userWalletAddress = accountAddress) => {
    if (!window.ethereum) return setAppStatus("noMetaMask");
    try {
      const userDoc = {
        _type: "users",
        _id: accountAddress,
        name: "Unnamed",
        profileImage: 0,
        nfts: userNFTs,
        walletAddress: accountAddress,
      };
      
      await client.createIfNotExists(userDoc);
      setRanCreateUser(true)
    } catch (error) {
      console.error(error);
      router.push("/");
      setAppStatus("error");
    }
  };
  const setCurrentUserName = async (newName) => {
    setCurrentUser({
      ...currentUser,
      name: newName,
    });

    const mutations = {
      _type: "users",
      _id: accountAddress,
      name: newName,
      profileImage: 0,
      nfts: userNFTs,
      walletAddress: accountAddress,
    }

    await client.createOrReplace(mutations);
    fetchPosts()
  };

  const setCurrentUserNFTPFP = async (newNFT) => {
    setCurrentUser({
      ...currentUser,
      profileImage: newNFT,
    });
    const mutations = {
      _type: "users",
      _id: accountAddress,
      name: currentUser.name,
      profileImage: newNFT,
      nfts: userNFTs,
      walletAddress: accountAddress,
    }

    await client.createOrReplace(mutations);
    fetchPosts()
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
        fetchPosts,
        getUserDetails,
        fetchUsers,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
