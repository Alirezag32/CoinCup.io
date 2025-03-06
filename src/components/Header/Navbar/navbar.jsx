import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  faSearch,
  faGear,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
const Navbar = () => {
          const [showItem1, setShowItem1] = useState(false);
          const [showScroll, setShowScroll] = useState(false);
          const [showItem2, setShowItem2] = useState(false);
          const [showScroll2, setShowScroll2] = useState(false);
  const [ShowInput, setShowInput] = useState(false);
   const [query, setQuery] = useState("");
   const router = useRouter();

   const handleKeyDown = (e) => {
     if (e.key === "Enter" && query.trim()) {
       router.push(`/crypto/${query.trim().toLowerCase()}`);
     }
   };

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
          return (
            <div className=" w-full z-50 sticky top-0 bg-white shadow max-md:hidden">
              <div className="w-10/12 mx-auto flex justify-around items-center ">
                <div className="flex ">
                  <div className="cursor-pointer hover:bg-gray-100 p-5 text-sm">
                    <Link href="/">Coins</Link>
                  </div>
                  <div className="cursor-pointer hover:bg-gray-100 p-5 text-sm">
                    <Link href="/">Exchange</Link>
                  </div>
                  <div className="cursor-pointer hover:bg-gray-100 p-5 text-sm">
                    <Link href="/">Swap</Link>
                  </div>
                </div>
                <div>
                  <Link href="/">
                    <Image
                      alt="pic"
                      className=" w-[80px] h-auto cursor-pointer"
                      src="svg/coinImage.svg"
                      width={120}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="relative flex flex-row items-center justify-between ">
                  <div className="flex flex-col max-h-10 max-w-14">
                    <div className="flex p-5 items-center justify-end relative max-h-10 max-w-14">
                      {showItem1 ? (
                        <input
                          className="border-none text-sm p-2 rounded outline-none mr-2 w-14"
                          placeholder="USD"
                          type="text"
                          onBlur={handleBlur}
                        />
                      ) : (
                        <div
                          onClick={toggleItem1}
                          className="mr-2 cursor-pointer text-sm "
                        >
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
                      <div className="absolute top-full w-50 h-64 overflow-y-auto bg-white rounded shadow z-50">
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
                  </div>
                  <div className="flex max-h-10 max-w-50">
                    <div className="flex p-5 items-center relative max-h-10 max-w-50">
                      {showItem2 ? (
                        <input
                          className="border-none text-sm p-2 rounded outline-none mr-2 w-14"
                          placeholder="English"
                          type="text"
                        />
                      ) : (
                        <div
                          onClick={toggleItem2}
                          className="mr-2 cursor-pointer text-sm"
                        >
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
                      <div className="absolute top-full w-50 h-64 overflow-y-auto bg-white rounded shadow z-50">
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
                  <div className="relative ml-5">
                    {ShowInput ? (
                      <input
                        onBlur={handleBlur}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="ring-1 ring-black rounded px-1 py-1 relative"
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
                  <div className="cursor-pointer ml-5">
                    <FontAwesomeIcon icon={faGear} />
                  </div>
                </div>
              </div>
            </div>
          );
}
 
export default Navbar;