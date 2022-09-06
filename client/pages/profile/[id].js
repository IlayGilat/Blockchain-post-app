import React, { useContext, useEffect,useState } from "react";
import ProfileHeader from "../../Components/profile/ProfileHeader";
import Sidebar from "../../Components/Sidebar";
import ProfileBody from "../../Components/profile/ProfileBody";
import { useRouter } from "next/router";
import { MyContext } from "../../Context/MyContext";
const style = {
  wrapper: `flex justify-center flex-row h-screen w-screen select-none bg-[#171717] text-white`,
  content: ` w-2/3 flex flex-auto`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-auto no-scrollbar basis-11/12`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  loginContent: `text-3xl font-bold text-center mt-24`,
};

function profile() {
  const {getUserDetails} = useContext(MyContext)
  const {query} = useRouter()
  const [id,setId] = useState(null)
  const [ isLoading,setIsLoading] = useState(true) 
  const [searchedUser, setSearchedUser] = useState()
  useEffect(()=>{
    setId(query.id)
    if(id){
      const search = async ()=> {
      setSearchedUser(await getUserDetails(id.slice(3)))
      }

      search()
    }
  },[query,id])
  
  useEffect(()=>{
    if(searchedUser){
      setIsLoading(false)
    }
  })
  return (
    isLoading ? (
      <div className={style.wrapper}>
      <div className={style.loginContainer}>
      <div className={style.loginContent}>Loading....</div>
    </div>
      </div>
    ): (
        <div className={style.wrapper}>
        <div className={style.content}>
          <div className="m-auto basis-1/12">
            <Sidebar initialSelectedIcon="Profile" />
          </div>
          <div className={style.mainContent}>
            <ProfileHeader address={id} user={searchedUser}/>
              <ProfileBody address={id} user={searchedUser}/>
            </div>
          </div>
      </div>
    )
  );
}

export default profile;
