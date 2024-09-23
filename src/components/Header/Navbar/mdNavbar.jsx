import {
  faSearch,
  faBars,
  faTimes,
  faRightLeft,
  faShuffle,
  faGear,
  faNewspaper,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const MdNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showItem1, setShowItem1] = useState(false);
          const [showScroll, setShowScroll] = useState(false);
          const [showScroll2, setShowScroll2] = useState(false);
          const [showItem2, setShowItem2] = useState(false);
          const [ShowInput, setShowInput] = useState(false);
          
  const inputRef = useRef(null);

  function toggleItem1() {
    setShowItem1(!showItem1);
    setShowScroll(!showItem1);
          }
           function toggleItem2() {
             setShowItem2(!showItem2);
             setShowScroll2(!showItem2);
          }
          function toggleInput() {
            setShowInput(!ShowInput);
          }
           function handleBlur() {
             console.log("OPS!!!");
             setShowItem1(false);
             setShowScroll(false);
             setShowItem2(false);
             setShowScroll2(false);
             setShowInput(false);
           }

  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowItem1(false);
        setShowScroll(false);
      }
    }

    if (showItem1) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showItem1]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center z-20 sticky top-0 bg-white shadow md:hidden">
        <div className="relative ml-10">
          {ShowInput ? (
            <input
              onBlur={handleBlur}
              className="ring-1 ring-black rounded px-1 py-1 relative text-xs w-25"
            />
          ) : null}
          <input
            onBlur={handleBlur}
            className="ring-1 ring-black rounded px-1 py-1 hidden"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={toggleInput}
          />
        </div>
        <div>
          <Image
            src="/svg/coinImage.svg"
            width={100}
            height={75}
            alt="coinCup"
            className="m-3"
          />
        </div>
        <div className="text-base m-3 cursor-pointer" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
      </div>
      {isOpen && (
        <div
          className={`fixed top-0 left-0 h-full w-60 bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-1000 ease-in-out z-30`}
        >
          <ul className="flex flex-col items-start">
            <li className="px-4 w-full hover:bg-gray-200 p-4 text-center flex flex-col">
              <FontAwesomeIcon className="text-2xl mb-1" icon={faBitcoin} />
              Coins
            </li>
            <li className="py-2 p-4 px-4 w-full hover:bg-gray-200 text-center flex flex-col">
              <FontAwesomeIcon className="text-2xl my-2" icon={faRightLeft} />
              Exchange
            </li>
            <li className="py-2 p-4 px-4 w-full hover:bg-gray-200 text-center flex flex-col">
              <FontAwesomeIcon className="text-2xl my-2" icon={faShuffle} />
              Swap
            </li>
            <li className="py-2 p-4 px-4 w-full hover:bg-gray-200 text-center flex flex-col">
              <FontAwesomeIcon className="text-2xl my-2" icon={faNewspaper} />
              API
            </li>
            <li className="py-2 p-4 px-4 w-full hover:bg-gray-200 text-center flex flex-col">
              <FontAwesomeIcon className="text-2xl my-2" icon={faGear} />
              Settings
            </li>
            <li className="py-2 px-4 w-full text-center mt-2">
              <button className="text-white bg-green-600 rounded-full p-2 w-2/3">
                connectWallet
              </button>
            </li>
          </ul>
          <div className="flex flex-col relative">
            <div
              className="flex p-5 items-center justify-around w-full"
              ref={inputRef}
            >
              {showItem1 ? (
                <input
                  className=" text-sm p-2 rounded outline-none mr-2 w-14"
                  placeholder="USD"
                  type="text"
                />
              ) : (
                <div onClick={toggleItem1} className=" cursor-pointer">
                  USD
                </div>
              )}
              <FontAwesomeIcon
                icon={faCaretDown}
                onClick={toggleItem1}
                className="cursor-pointer"
              />
            </div>
            {showScroll && (
              <div className="absolute left-8 bottom-full w-2/3 max-h-40 overflow-y-auto bg-white rounded shadow z-50">
                <div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 1
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 2
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 3
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 4
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 5
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 6
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 7
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 8
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 9
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 10
                  </div>
                </div>
              </div>
            )}
            <div className="flex flex-col relative">
              <div className="flex p-5 items-center justify-around w-full">
                {showItem2 ? (
                  <input
                    className="border-none text-sm p-2 rounded outline-none mr-2 w-14"
                    placeholder="English"
                    type="text"
                  />
                ) : (
                  <div onClick={toggleItem2} className="mr-2 cursor-pointer">
                    English
                  </div>
                )}
                <FontAwesomeIcon
                  icon={faCaretDown}
                  onClick={toggleItem2}
                  className="cursor-pointer"
                />
              </div>
              {showScroll2 && (
                <div className="absolute left-8 bottom-full w-2/3 max-h-40 overflow-y-auto bg-white rounded shadow z-50">
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 1
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 2
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 3
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 4
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 5
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 6
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 7
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 8
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 9
                  </div>
                  <div className="p-4 cursor-pointer bg-gray-200 rounded">
                    Item 10
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MdNavbar;
