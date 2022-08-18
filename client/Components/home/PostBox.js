import React,{useState,useContext} from 'react'

const style = {
    wrapper: `px-4 flex pb-4 w-2/3 mx-auto`,
    tweetBoxLeft: `mr-4`,
    tweetBoxRight: `flex-1`,
    profileImage: `height-12 w-12 rounded-full`,
    inputField: `w-full h-full outline-none bg-transparent text-lg placeholder:italic placeholder:text-slate-400 border-[#171717] border focus:border focus:border-[#38444d] resize-none py-2 pl-9 pr-3 `,
    formLowerContainer: `flex`,
    submitGeneral: `px-8 py-2 rounded-3xl font-bold flex m-auto mt-1 `,
    inactiveSubmit: `bg-[#196195] text-[#95999e]`,
    activeSubmit: `bg-[#1d9bf0] text-white`,
  };

function PostBox() {
    const [Message, setMessage] = useState("");
  return (
        <div className={style.wrapper}>
          <div className={style.tweetBoxLeft}>
          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44McpW8bW_YVspIfH-Bh967ooD-PqaMC_oknoiFjdbg&s"
          alt="pfp"
          className={
            style.profileImage
          }
          />
          </div>
          <div className={style.tweetBoxRight}>
            <form>
              <textarea

                className={style.inputField}
                placeholder="Speak your mind"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className={style.formLowerContainer}>
                <button
                  type="submit"
                  disabled={!Message}
                  onClick={(event) => postTweet(event)}
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