import { MyContext } from "@/providers/maiContext";
import { useContext , useDeferredValue , useState , useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Footer = () => {
  const { divHeight } = useContext(MyContext);

  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = (event) => {
      setIsSmallScreen(event.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    // Clean up listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);
  

  return (
    <div
      style={{ marginTop: isSmallScreen ? "100px" : `${divHeight+100}px` }}
      className="w-full bg-blue-600 text-white p-4 max-md:mt-0 "
    >
      <div className="flex flex-wrap justify-around mr-10 ml-20 my-10 md:justify-between">
        <div className="flex flex-col items-start w-1/2 md:w-1/4 mb-4">
          <h4 className="text-white text-sm mb-2">CoinCup io</h4>
          <div className="text-xs text-gray-400 hover:text-white cursor-pointer">
            Methodology
          </div>
          <div className="text-xs text-gray-400 hover:text-white cursor-pointer">
            Support
          </div>
          <div className="text-xs text-gray-400 hover:text-white cursor-pointer">
            Our API
          </div>
          <div className="text-xs text-gray-400 hover:text-white cursor-pointer">
            Rate Comparison
          </div>
          <div className="text-xs text-gray-400 hover:text-white cursor-pointer">
            Careers
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 mb-4">
          <h4 className="text-white text-sm mb-2">LEGALS</h4>
          <div className="text-xs ">
            <span className="text-gray-400 hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>
          <div className="text-xs  ">
            <span className="text-gray-400 hover:text-white cursor-pointer">
              Privacy Policy
            </span>
          </div>
          <div className="mt-2">
            <h4 className="text-white text-sm mb-2">DISCLAIMER</h4>
            <div className="text-xs ">
              <span className="text-gray-400 hover:text-white">
                Neither ShapeShift AG nor CoinCap are in
                <br /> any way associated with CoinMarketCap, LLC
                <br /> or any of its goods and services.
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 mb-4">
          <h4 className="text-white text-sm mb-2">FOLLOW US</h4>
          <div className="flex">
            <div className="mr-2">
              <FontAwesomeIcon className="cursor-pointer" icon={faTwitter} />
            </div>
            <div>
              <FontAwesomeIcon className="cursor-pointer" icon={faFacebook} />
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 mb-4">
          <h4 className="text-white text-sm mb-2">COINCAP APP AVAILABLE ON</h4>
          <div className="flex flex-col">
            <Image
              className="opacity-75 hover:opacity-100 transition-opacity duration-100 cursor-pointer"
              src="svg/google.svg"
              width={135}
              height={40}
              alt="Google Play"
            />
            <Image
              className="opacity-75 hover:opacity-100 transition-opacity duration-100 mt-2  cursor-pointer"
              src="svg/appStore.svg"
              width={135}
              height={40}
              alt="App Store"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
