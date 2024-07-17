
import { Inter } from "next/font/google";
import MainLayout from "@/layouts/mainlayout";
import { fetchAssets } from "@/services/mainApi";
import axios from "axios";
export default function Home({ assets }) {
  return <div>{ console.log(assets)}</div>;
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
