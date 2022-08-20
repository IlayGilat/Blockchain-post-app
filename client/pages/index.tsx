import type { NextPage } from "next";
import Sidebar from "../Components/sidebar";
import Feed from "../Components/home/Feed";
import Widgets from "../Components/home/Widgets";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import Image from "next/image";
import metamasklogo from "../assets/metamask.png";
import errorImg from "../assets/error.png";
const style = {
  wrapper: `flex h-screen w-screen flex-row bg-[#171717] text-white `,
  content: ` w-2/3 flex flex-auto `,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
};
const Home: NextPage = () => {
  const { appStatus, connectToWallet } = useContext(MyContext);

  const app = (status = appStatus) => {
    switch (status) {
      case "connected":
        return userLoggedIn;
      case "notConnected":
        return noUserFound;
      case "noMetaMask":
        return noMetaMaskFound;
      case "error":
        return error;
      default:
        return loading;
    }
  };
  const noMetaMaskFound = (
    <div className={style.loginContainer}>
      <Image src={metamasklogo} height={200} width={200} />
      <div>
        <a
          target="blank"
          rel="noreferrer"
          href={"https://metamask.io/download.html"}
          className={style.loginContent}
        >
          You Must install Metamask, a <br /> virtual Ethereum wallet, in your
          browser
        </a>
      </div>
    </div>
  );

  const noUserFound = (
    <div className={style.loginContainer}>
      <Image src={metamasklogo} height={200} width={200} />
      <div
        className={style.walletConnectButton}
        onClick={() => connectToWallet()}
      >
        Connect Wallets
      </div>
      <div className={style.loginContent}>Connect to Wallet</div>
    </div>
  );

  const error = (
    <div className={style.loginContainer}>
      <Image src={errorImg} height={200} width={200} />
      <div className={style.loginContent}>
        An error occurred. Please try again later or use another browser
      </div>
    </div>
  );

  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loginContent}>Loading....</div>
    </div>
  );
  const userLoggedIn = (
    <div className={style.content}>
      <div className="m-auto basis-1/12">
        <Sidebar />
      </div>
      <div className="overflow-auto no-scrollbar border-r border-[#38444d] basis-10/12 ">
        <Feed />
      </div>
      <div className="m-auto basis-1/12">
        <Widgets />
      </div>
    </div>
  );
  return <div className={style.wrapper}>{app(appStatus)}</div>;
};

export default Home;
