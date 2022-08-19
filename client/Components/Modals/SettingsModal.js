import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import NftImage from "../NftImage";
const NFTs = [
  {
    text: "Squod #21",
    image:
      "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
  },
  {
    text: "Fuckawaii #377",
    image:
      "https://lh3.googleusercontent.com/z6_q9nNuhnkFZKCVWbPaWFjwwduU_lmz2yd98_0vIzLAeFC8qWls42oqb096SWS38L0UOKh9MXjXS9Dr7NIkP_yvgcQr3U13e3VDUQ=w600",
  },
  {
    text: "PsyBulls #101",
    image:
      "https://lh3.googleusercontent.com/eo470vZzfmJCl0PcmX5hoLp3xyiUb01GnMbObIUKqRjvNBLw9Gnu3FjvU64qRDaqczSX7j__3augpO32Y3mHioOPJ-ly8Xc7w-A1Nw=w600",
  },
  {
    text: "Squod #21",
    image:
      "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
  },
  {
    text: "Squod #21",
    image:
      "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
  },
  {
    text: "Squod #21",
    image:
      "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
  },
  {
    text: "Squod #21",
    image:
      "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
  },
  {
    text: "Squod #21",
    image:
      "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
  },
  {
    text: "Squod #21",
    image:
      "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
  },
  {
    text: "Squod #21",
    image:
      "https://lh3.googleusercontent.com/Luialoa5_3h5vd8xT7t2gZ0XZEPHgVmBpLjU3CCD3oHkpTd3cNkwAlv4rLyflIgwC-SFWjxYn8hoRKmzS50TN0co8oZX8mkM6I3crw=w600",
  },
];

const style = {
  wrapper: `h-[30rem] w-[70rem] text-white bg-[#171717] rounded-3xl p-10 overflow-auto no-scrollbar`,
  backButton: `text-4xl cursor-pointer mr-2 rounded-full hover:bg-[#363636] p-1 left-3 top-2 absolute`,
  content: `p-5`,
  inputField: `outline-none bg-transparent text-lg placeholder:italic placeholder:text-slate-400  border  border-[#196195] resize-none py-2 pl-9 pr-3 `,
  NFT: ` p-4 hover:bg-[#363636] hover:rounded-3xl cursor-pointer basis-1/3 flex `,
  NftContainer: `flex flex-wrap `,
  NameSetContainer: `flex mb-10`,
  submitGeneral: `px-8 py-2 rounded-3xl text-xl font-bold  flex mx-auto `,
  headerTitle: `text-xl font-bold text-center mb-5`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
};
function SettingsModal({ setIsSettingsModalOpen }) {
  const [name, setName] = useState("");
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
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
              <button
                type="submit"
                disabled={!name}
                onClick={(event) => postPost(event)}
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
          {NFTs.map((NFT, index) => (
            <div className={style.NFT} key={index}>
              <NftImage ImageUrl={NFT.image} boxSize="150" />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className={`${style.submitGeneral} ${style.activeSubmit}`}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default SettingsModal;
