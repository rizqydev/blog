import { Inter, Salsa, Noto_Color_Emoji, Noto_Serif } from "next/font/google";
import "@/app/global.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", preload: true });
const notoSerif = Noto_Serif({ subsets: ["latin"], variable: "--font-noto-serif", preload: true });
const notoColorEmoji = Noto_Color_Emoji({ subsets: ["emoji"], weight: "400", variable: "--font-noto-color-emoji", preload: true });
const salsa = Salsa({
  subsets: ["latin"],
  variable: "--font-salsa",
  weight: "400",
  preload: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.className} ${salsa.variable} ${notoSerif.variable} ${notoColorEmoji.variable} flex flex-col min-h-screen`}
    >
      <Head>
        <title>Rizqy Blog</title>
      </Head>
      <Navbar />
      <div className="flex justify-center py-8">
        <div className="md:w-[850px]">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
