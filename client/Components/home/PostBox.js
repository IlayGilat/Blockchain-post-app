import React, { useState, useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import { BsCardImage } from "react-icons/bs";
import { useFilePicker } from "use-file-picker";
import { MdClear } from "react-icons/md";
import { client } from "../../lib/client";
const style = {
  wrapper: `px-4 flex pb-4 w-2/3 mx-auto`,
  PostBoxLeft: `mr-4 `,
  PostBoxRight: `flex-1`,
  profileImage: `w-10 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg placeholder:italic placeholder:text-slate-400 resize-none py-2 pl-9 pr-3 `,
  formLowerContainer: `flex`,
  submitGeneral: `px-8 py-2 rounded-3xl font-bold flex m-auto mt-1 `,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  icon: `cursor-pointer  mr-2`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center m-2`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
  postImage: `  outline outline-offset-4 outline-1 outline-[#38444d]`,
};

function PostBox() {
  const [Message, setMessage] = useState("");
  const [openFileSelector, { filesContent, clear }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: false,
    limitFilesConfig: { max: 1 },
    // minFileSize: 0.1, // in megabytes
    maxFileSize: 50,
  });
  const { currentUser, userNFTs, accountAddress } = useContext(MyContext);

  const postPost = async (event) => {
    event.preventDefault();

    if (!Message) return;
    const postId = `${accountAddress}_${Date.now()}`;

    const PostDoc = {
      _type: "posts",
      _id: postId,
      postText: Message,
      timestamp: new Date(Date.now()).toISOString(),
      image: filesContent[0]?.content,
      author: {
        _key: postId,
        _ref: accountAddress,
        _type: "reference",
      },
    };
    await client.createIfNotExists(PostDoc);
    await client
      .patch(accountAddress)
      .setIfMissing({ posts: [] })
      .insert("after", "posts[-1]", [
        {
          _key: postId,
          _type: "reference",
          _ref: postId,
        },
      ])
      .commit();
      clear()
      setMessage('')
  };
  return (
    <div className={style.wrapper}>
      <div className={style.PostBoxLeft}>
        <img
          src={
            userNFTs.length != 0
              ? userNFTs[currentUser.profileImage].image
              : "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
          }
          alt="pfp"
          className={style.profileImage}
        />
      </div>
      <div className={style.PostBoxRight}>
        <form>
          <div
            className={`${
              Message || filesContent.length > 0
                ? `border border-[#1d9bf0] `
                : ``
            } ${filesContent.length > 0 ? `p-4` : ``}`}
          >
            <textarea
              className={Message ? style.inputField : `${style.inputField}  `}
              placeholder="Speak your mind"
              value={Message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            {filesContent.length > 0 ? (
              <div className="w-1/2 ">
                <MdClear
                  className={`${style.icon} relative left-1  top-6 bg-[#363636] w-[20px] h-[20px] rounded-[100px]`}
                  onClick={() => clear()}
                />
                <img
                  src={filesContent[0].content}
                  alt={filesContent[0].name}
                  className={style.postImage}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={style.iconsContainer}>
            <BsCardImage
              className={style.icon}
              onClick={() => openFileSelector()}
            />
          </div>
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
  );
}

export default PostBox;
