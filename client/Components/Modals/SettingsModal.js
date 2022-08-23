import React, { useContext, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { MyContext } from "../../Context/MyContext";
import NftImage from "../NftImage";

const style = {
  wrapper: `h-[30rem] w-[70rem] text-white bg-[#171717] rounded-3xl p-10 overflow-auto no-scrollbar`,
  backButton: `text-4xl cursor-pointer mr-2 rounded-full hover:bg-[#363636] p-1 left-3 top-2 absolute`,
  content: `p-5`,
  inputField: `outline-none bg-transparent text-lg placeholder:text-slate-400  border  border-[#196195] resize-none py-2 pl-9 pr-3 `,
  NFT: ` p-4 hover:bg-[#363636] hover:rounded-3xl cursor-pointer m-auto `,
  NftContainer: `flex flex-wrap mb-5`,
  NameSetContainer: `flex mb-10`,
  submitGeneral: `px-8 py-2 rounded-3xl text-xl font-bold  flex mx-auto `,
  headerTitle: `text-xl font-bold text-center mb-5`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
};
function SettingsModal({ setIsSettingsModalOpen }) {
  const {currentUser,setCurrentUserName,userNFTs,setCurrentUserNFTPFP} = useContext(MyContext)
  const [name, setName] = useState("");
  const [choosenNFT,setChoosenNFT] = useState(currentUser.profileImage);
  return (
    <div className={style.wrapper}>
      <div
        className={style.backButton}
        onClick={() => setIsSettingsModalOpen(Boolean(false))}
      >
        <BsArrowLeft />
      </div>
      <div className={style.content}>
        <div className={style.headerTitle}>Change Your User Name</div>
        <div className={style.NameSetContainer}>
          <form className="flex mx-auto ">
            <input
            type="text"
              className={ 
                !name
                  ? `${style.inputField} mx-5`
                  : `${style.inputField} mx-5 focus:border-[#1d9bf0]`
              }
              placeholder={currentUser.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
              <button
                type="submit"
                disabled={!name}
                onClick={(event) => {event.preventDefault(); setCurrentUserName(name)}}
                className={`${style.submitGeneral} mx-5  ${
                  name ? style.activeSubmit : style.inactiveSubmit
                }`}
              >
                Save
              </button>
          </form>
        </div>
        <div className={style.headerTitle}>Change Your Profile Picture</div>
        <div className={style.NftContainer}>
          {userNFTs.map((NFT, index) => (
            <div className={`${style.NFT}`}  key={index} onClick={()=>setChoosenNFT(index)}>
              <NftImage ImageUrl={NFT.image} isChoosen={index === choosenNFT} boxSize="150" />
            </div>
          ))}
        </div>
        <button
          type="submit"
          onClick={()=>{setCurrentUserNFTPFP(choosenNFT)}}
          className={`${style.submitGeneral} ${style.activeSubmit}`}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default SettingsModal;
