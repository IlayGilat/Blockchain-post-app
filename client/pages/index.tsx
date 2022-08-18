import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../Components/sidebar";
import Feed from "../Components/home/Feed";
import Widgets from "../Components/home/Widgets";
const style = {
  wrapper: `flex h-screen w-screen select-none bg-[#171717] text-white `,
  content: ` w-2/3 flex flex-auto`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
};
const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className=" m-auto">
          <Sidebar />
        </div>
        <div className="overflow-auto no-scrollbar ">
          <Feed />
        </div>
      </div>
        <Widgets />
    </div>
  );
};

export default Home;
