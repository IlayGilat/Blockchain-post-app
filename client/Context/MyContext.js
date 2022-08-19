import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [accountAddress, setAccountAddress] = useState(
    "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788"
  );
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
    NFTs: [
      {
        text: "Squod #21",
        image: "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600"
      },
      {
        text: "Fuckawaii #377",
        image: "https://lh3.googleusercontent.com/z6_q9nNuhnkFZKCVWbPaWFjwwduU_lmz2yd98_0vIzLAeFC8qWls42oqb096SWS38L0UOKh9MXjXS9Dr7NIkP_yvgcQr3U13e3VDUQ=w600"
      },
      {
        text: "PsyBulls #101",
        image: "https://lh3.googleusercontent.com/eo470vZzfmJCl0PcmX5hoLp3xyiUb01GnMbObIUKqRjvNBLw9Gnu3FjvU64qRDaqczSX7j__3augpO32Y3mHioOPJ-ly8Xc7w-A1Nw=w600"
      },
      {
        text: "Squod #21",
        image: "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600"
      },
      {
        text: "Squod #21",
        image: "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600"
      },
      {
        text: "Squod #21",
        image: "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600"
      },
      {
        text: "Squod #21",
        image: "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600"
      },
      {
        text: "Squod #21",
        image: "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600"
      },
      {
        text: "Squod #21",
        image: "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600"
      },
      {
        text: "Squod #21",
        image: "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600"
      },
    ],
    walletAddress: "0xCBB6E40e415F913e1a6c4A8B50097cfD6B87E788",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s",
  });

  return (
    <MyContext.Provider
      value={{
        accountAddress,
        setAccountAddress,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
