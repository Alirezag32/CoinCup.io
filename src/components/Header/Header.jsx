import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import { useState } from "react";
import Navbar from "./Navbar/navbar";
import MdNavbar from "./Navbar/mdNavbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-custom-gradient  w-full">
        <a
          className="text-white flex justify-center items-center text-xs"
          href=""
        >
          <svg
            className="m-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.29221 0.193656C1.52432 -0.00211996 1.84546 -0.0539742 2.12739 0.0587993L8.55569 2.63015H16.1295L22.558 0.0587964C22.8399 -0.0539748 23.161 -0.00211682 23.3932 0.193662C23.6253 0.389441 23.7305 0.697242 23.6669 0.994151L21.7447 9.96422L23.6328 14.9991C23.784 15.4021 23.5985 15.8535 23.2077 16.0339C17.9963 18.4392 14.1579 22.1543 12.9961 23.6767C12.8362 23.8862 12.5857 24.0063 12.3223 23.9997C12.0589 23.9932 11.8146 23.8608 11.6654 23.6437C10.6237 22.1285 8.74746 20.5456 6.74559 19.1578C4.76087 17.7818 2.73105 16.6507 1.45934 16.0252C1.08003 15.8387 0.904063 15.3949 1.05248 14.9991L2.94055 9.96422L1.01847 0.994139C0.954844 0.697229 1.06011 0.389431 1.29221 0.193656ZM21.7364 2.1579L16.593 4.2152C16.4959 4.25403 16.3923 4.27398 16.2878 4.27398H8.3974C8.29284 4.27398 8.18923 4.25403 8.09215 4.21519L2.94898 2.15791L4.59834 9.85519C4.63128 10.0089 4.61945 10.1688 4.56425 10.316L2.84995 14.8875C4.16448 15.5726 5.93859 16.5981 7.68217 17.8069C9.39674 18.9955 11.1381 20.3995 12.3725 21.8667C14.0444 20.0185 17.4397 17.0334 21.829 14.8705L20.121 10.316C20.0658 10.1688 20.0539 10.0089 20.0869 9.85518L21.7364 2.1579Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.045 9.20549L14.3618 4.0019L15.5836 2.90224L21.5015 9.47757L20.8905 10.8493L3.79464 10.8493L3.18129 9.48028L9.04666 2.90494L10.2734 3.99919L5.62922 9.20549L19.045 9.20549Z"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0221 15.4394L20.7589 10.6588L19.7065 9.39598L12.3423 15.5328L4.97808 9.39598L3.92572 10.6588L9.66248 15.4394L1.92371 14.4721L1.71982 16.1032L12.2404 17.4183C12.3081 17.4268 12.3766 17.4268 12.4443 17.4183L22.9648 16.1032L22.7609 16.1032L15.0221 15.4394Z"
              fill="white"
            />
          </svg>
          <div className="flex items-center">
            Buy, sell, & swap your favorite assets. No KYC. No added fees.
            Decentralized.
            <FontAwesomeIcon className="ml-2 " icon={faArrowRight} />
          </div>
          <div></div>
        </a>
      </div>
      <Navbar />
      <MdNavbar />
      <div className="bg-blue-500 p-5 pb-28 max-md:pb-5">
        <div className="hidden md:flex justify-around items-center mr-auto ml-auto flex-wrap text-base w-9/12">
          <div className="p-2">
            <p className="text-white ">MarketCap</p>
            <p className="text-white  text-center">$2.35T</p>
          </div>
          <div className="p-2">
            <p className="text-white ">EXCHANGE VOL</p>
            <p className="text-white  text-center">$59.19B</p>
          </div>
          <div className="p-2">
            <p className="text-white ">ASSETS</p>
            <p className="text-white  text-center">2,297</p>
          </div>
          <div className="p-2">
            <p className="text-white ">EXCHANGES</p>
            <p className="text-white  text-center">73</p>
          </div>
          <div className="p-2">
            <p className="text-white ">MARKETS</p>
            <p className="text-white  text-center">8,022</p>
          </div>
          {/* <div className="p-2">
            <p className="text-white text-lg">BTC DOM INDEX</p>
            <p className="text-white text-lg text-center">54.8%</p>
          </div> */}
        </div>

        <div className="md:hidden">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleDrawer}
          >
            <p className="text-white text-lg">Market Snapshot</p>
            <span className="text-white text-lg">{isOpen ? "▲" : "▼"}</span>
          </div>

          {isOpen && (
            <div className="flex flex-col items-start mt-4">
              <div className="border-b border-gray-300 p-2 flex justify-between w-full">
                <p className="text-white text-base">MarketCap</p>
                <p className="text-white text-base text-right">$2.35T</p>
              </div>
              <div className="border-b border-gray-300 p-2 flex justify-between w-full">
                <p className="text-white text-base">EXCHANGE VOL</p>
                <p className="text-white text-base text-right">$59.19B</p>
              </div>
              <div className="border-b border-gray-300 p-2 flex justify-between w-full">
                <p className="text-white text-base">ASSETS</p>
                <p className="text-white text-base text-right">2,297</p>
              </div>
              <div className="border-b border-gray-300 p-2 flex justify-between w-full">
                <p className="text-white text-base">EXCHANGES</p>
                <p className="text-white text-base text-right">73</p>
              </div>
              <div className="border-b border-gray-300 p-2 flex justify-between w-full">
                <p className="text-white text-base">MARKETS</p>
                <p className="text-white text-base text-right">8,022</p>
              </div>
              <div className="border-b border-gray-300 p-2 flex justify-between w-full">
                <p className="text-white text-base">BTC DOM INDEX</p>
                <p className="text-white text-base text-right">54.8%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
