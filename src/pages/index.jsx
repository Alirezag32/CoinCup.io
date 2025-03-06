import { useState, useRef, useEffect, useContext } from "react";
import { Inter } from "next/font/google";
import MainLayout from "@/layouts/mainlayout";
import { fetchAssets } from "@/services/mainApi";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formatNumber from "@/helper/formatNumber";
import Image from "next/image";
import { MyContext } from "@/providers/maiContext";

export default function Home({ assets }) {
  const [visibleCount, setVisibleCount] = useState(40);
  const divRef = useRef(null);
  const { divHeight, setDivHeight } = useContext(MyContext);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        setDivHeight(entries[0].contentRect.height);
      }
    });

    if (divRef.current) {
      resizeObserver.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        resizeObserver.unobserve(divRef.current);
      }
    };
  }, [divRef.current]);

  

  const handleViewMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 30, 100));
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 60, 40));
  };

  return (
    <div
      ref={divRef}
      className="absolute max-md:static top-[210px] max-lg::top-[250px] left-1/2 transform -translate-x-1/2 max-md:-translate-x-0 w-8/12 max-md:w-full z-10 flex flex-col shadow-custom bg-white p-6 text-xs rounded-tl-md"
    >
      <div className="flex w-full border-b pb-2">
        <div className="w-1/12 max-md:hidden cursor-pointer">
          Rank <FontAwesomeIcon className="ml-2" icon={faCaretUp} />
        </div>
        <div className="w-3/12 max-md:w-6/12 cursor-pointer">Name</div>
        <div className="w-2/12 max-md:w-3/12 cursor-pointer">Price</div>
        <div className="w-3/12 max-lg:hidden cursor-pointer">MarketCap</div>
        <div className="w-2/12 max-md:hidden cursor-pointer">Low(24H)</div>
        <div className="w-2/12 max-md:hidden cursor-pointer">High(24H)</div>
        <div className="w-2/12 max-md:w-3/12 cursor-pointer text-right">
          Change(24Hr)
        </div>
      </div>
      {assets?.slice(0, visibleCount).map((item, index) => {
        const priceChange24h = item.price_change_percentage_24h.toFixed(2);
        const priceChangeColor =
          priceChange24h >= 0 ? "text-green-500" : "text-red-500";

        return (
          <div
            key={index}
            className="flex w-full border-b border-gray-200 py-3 text-xs cursor-pointer transition-colors duration-300"
          >
            <div className="w-1/12 max-md:hidden ml-1">
              {item.market_cap_rank}
            </div>
            <div className="w-3/12 max-md:w-6/12 flex items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={24}
                height={24}
                className="mr-2"
              />
              <div className="flex flex-col">
                <span>{item.name}</span>
                <span className="font-weight: 100 my-1 text-gray-400">
                  {item.symbol}
                </span>
              </div>
            </div>
            <div className="w-2/12 max-md:w-3/12">${item.current_price}</div>
            <div className="w-3/12 max-lg:hidden">
              {formatNumber(item.market_cap)}
            </div>
            <div className="w-2/12 max-md:hidden">${item.low_24h}</div>
            <div className="w-2/12 max-md:hidden">${item.high_24h}</div>
            <div
              className={`w-2/12 max-md:w-3/12 text-right ${priceChangeColor}`}
            >
              {priceChange24h}%
            </div>
          </div>
        );
      })}
      <div className="flex justify-center mt-4">
        {visibleCount < 100 ? (
          <button
            onClick={handleViewMore}
            className="bg-green-500 text-white px-4 py-2 rounded-full"
          >
            View More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="bg-green-500 text-white px-4 py-2 rounded-full"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps() {
  const assets = await fetchAssets();
  console.log(assets)

  return {
    props: {
      assets,
    },
  }
};
  