import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import Navbar from "@/components/Header/Navbar/navbar";
import MdNavbar from "@/components/Header/Navbar/mdNavbar";
import Image from "next/image";

export default function CryptoDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [coin, setCoin] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        if (!res.ok) {
          console.warn(`⚠️ دریافت اطلاعات ناموفق بود: ${res.status}`);
          router.push("/404");
          return;
        }

        const data = await res.json();
        console.log(data)
        if (data.error) {
          console.warn(`⚠️ کوین "${id}" یافت نشد.`);
          router.push("/404");
          return;
        }

        setCoin(data);

        // دریافت داده‌های نمودار
        const chartRes = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
        );
        if (!chartRes.ok) {
          console.warn(
            `⚠️ دریافت داده‌های نمودار ناموفق بود: ${chartRes.status}`
          );
          return;
        }

        const chartData = await chartRes.json();
        setChartData({
          labels: chartData.prices.map((p) =>
            new Date(p[0]).toLocaleDateString()
          ),
          datasets: [
            {
              label: 'price in 7 days',
              data: chartData.prices.map((p) => p[1]),
              borderColor: "#1DB954",
              backgroundColor: "rgba(29, 185, 84, 0.2)",
              fill: true,
              tension: 0.3,
            },
          ],
        });
      } catch (error) {
        console.warn("⚠️ خطا در دریافت داده‌ها:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!coin) return <p className="text-white">در حال بارگذاری...</p>;

  return (
    <>
      <Navbar />
      <MdNavbar />
      <div className="p-6 bg-gray-900 text-white min-h-screen">
        <div className="flex items-center space-x-4">
          <Image
            width={100}
            height={100}
            src={coin.image.large}
            alt={coin.name}
            className="w-16 h-16"
          />
          <h1 className="text-3xl font-bold">
            {coin.name} ({coin.symbol.toUpperCase()})
          </h1>
        </div>

        <p className="mt-2 text-gray-300">
          Market Rank: #{coin.market_cap_rank}
        </p>
        <p className="mt-1">
          💰 price : ${coin.market_data.current_price.usd.toLocaleString()}
        </p>
        <p>
          24-hour changes :{" "}
          {coin.market_data.price_change_percentage_24h.toFixed(2)}%
        </p>
        <p>
          📊 Market size :  ${coin.market_data.market_cap.usd.toLocaleString()}
        </p>

        {chartData && (
          <div className="mt-6 bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">📈 price chart around 7 days</h2>
            <Line data={chartData} />
          </div>
        )}
      </div>
    </>
  );
}
