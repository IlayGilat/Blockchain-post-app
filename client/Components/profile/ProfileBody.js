import {  useState,useContext } from 'react'
import { MyContext  }  from '../../Context/MyContext'
import Post from '../Post'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Divider } from '@chakra-ui/react'
import NftImage from '../NftImage'
const style = {
  wrapper: `overflow-auto no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
  NftBody: `grid grid-cols-4 overflow-auto no-scrollbar`,
  NFT: `m-auto mt-10 mb-3`,
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


const NFTs = [
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
]


const ProfileBody = () => {
const {accountAddress} = useContext(MyContext)
  return (
     <div className={style.wrapper}>
   <Tabs variant='soft-rounded' className='m-5'>
    <TabList>
      <Tab>Main</Tab>
      <Tab>NFTs</Tab>
    </TabList>
    <TabPanels>
    <TabPanel>
    
      {
        tweets.map((tweet,index) => (
          <Post 
          key={index}
          displayName="Ilay Gilat"
          userName={`${accountAddress.slice(0,4)}...${accountAddress.slice(-4)}`}
          text={tweet.text}
          avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s"
          timestamp={tweet.timestamp}
          />
          ))
        }
        </TabPanel>
        <TabPanel >
          <div className={style.NftBody}>
          {
            NFTs.map((NFT,index) => (
           <div className={style.NFT} key={index}>
             <NftImage Name={NFT.text} ImageUrl={NFT.image} boxSize="225"/>
           </div>   
           
             ))
          }
          </div>
        </TabPanel>
        </TabPanels>
        </Tabs>
    </div>
  )
}

export default ProfileBody