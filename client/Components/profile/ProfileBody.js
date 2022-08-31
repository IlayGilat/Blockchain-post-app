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



const ProfileBody = ({address}) => {
const {currentUser,userNFTs} = useContext(MyContext)
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
        currentUser.tweets.map((tweet,index) => (
          <Post 
          key={index}
          displayName="Ilay Gilat"
          userName={`${address.slice(0,4)}...${address.slice(-4)}`}
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
            userNFTs.map((NFT,index) => (
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