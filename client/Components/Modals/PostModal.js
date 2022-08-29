import React,{useContext, useState} from 'react'
import PostBox from '../home/PostBox';
import { BsArrowLeft } from "react-icons/bs";
import { MyContext } from '../../Context/MyContext';

const style = {
    wrapper: `h-[20rem] w-[35rem] text-white bg-[#171717] rounded-3xl p-10 flex flex-col`,
    PostBoxLeft: `mr-4`,
    PostBoxRight: `flex-1`,
    backButton: `text-4xl cursor-pointer mr-2 rounded-full hover:bg-[#363636] p-1 left-3 top-2 absolute`,
    profileImage: `w-[4rem] rounded-full mx-auto mb-5 `,
    inputField: `w-full h-full outline-none bg-transparent text-lg placeholder:italic placeholder:text-slate-400  border  border-[#196195] resize-none py-2 pl-9 pr-3 `,
    formLowerContainer: `flex mt-10`,
    submitGeneral: `px-8 py-2 rounded-3xl text-xl font-bold  flex m-auto `,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
  };
function PostModal({setIsPostModalOpen}) {
    const [Message, setMessage] = useState("");
    const {currentUser,userNFTs} = useContext(MyContext)
  return (
    <div className={style.wrapper}>
              <div className={style.backButton} onClick={() => setIsPostModalOpen(Boolean(false))}>
          <BsArrowLeft  />
        </div>
    <div className={style.PostBoxLeft}>
    <img
    src={userNFTs.length != 0 ? userNFTs[currentUser.profileImage].image : 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg'}
    alt="pfp"
    className={
      style.profileImage
    }
    />
    </div>
    <div className={style.PostBoxRight}>
      <form>
        <textarea
          className={! Message ? style.inputField :`${style.inputField} focus:border-[#1d9bf0] `}
          placeholder="Speak your mind"
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className={style.formLowerContainer}>
          <button
            type="submit"
            disabled={!Message}
            onClick={(event) => postPost(event)}
            className={`${style.submitGeneral} ${
              Message ? style.activeSubmit : style.inactiveSubmit
            }`}
          >
            Post
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default PostModal