import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { MyProvider } from "@/providers/maiContext";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });


export default function App({ Component, pageProps }) {
   const getLayout = Component.getLayout ?? ((page) => page);
   return (
     <div className={inter.className}>
       <MyProvider>{getLayout(<Component {...pageProps} />)}</MyProvider>
       {/* <ToastContainer /> */}
     </div>
   );
}
