import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { MyProvider } from "@/providers/maiContext";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });


export default function App({ Component, pageProps }) {
   const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <title>coinCup</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <div className={inter.className}>
        <MyProvider>{getLayout(<Component {...pageProps} />)}</MyProvider>
        
      </div>
    </>
  );
}
