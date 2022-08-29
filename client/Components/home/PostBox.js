import React,{useState,useContext} from 'react'
import { MyContext } from '../../Context/MyContext';

const style = {
    wrapper: `px-4 flex pb-4 w-2/3 mx-auto`,
    PostBoxLeft: `mr-4 `,
    PostBoxRight: `flex-1`,
    profileImage: `w-10 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg placeholder:italic placeholder:text-slate-400 border-[#171717] border focus:border focus:border-[#1d9bf0] resize-none py-2 pl-9 pr-3 `,
    formLowerContainer: `flex`,
    submitGeneral: `px-8 py-2 rounded-3xl font-bold flex m-auto mt-1 `,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
  };

function PostBox() {
    const [Message, setMessage] = useState("");
    const {currentUser,userNFTs} = useContext(MyContext)
  return (
        <div className={style.wrapper}>
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
                className={Message ? style.inputField : `${style.inputField} focus:border-[#196195] `}
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

export default PostBox