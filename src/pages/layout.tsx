import "@/app/global.css";
import { Inter, Salsa, Poppins, Noto_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Head from "next/head";
// import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSerif = Noto_Serif({ subsets: ["latin"], variable: "--font-noto-serif" });
const salsa = Salsa({
  subsets: ["latin"],
  variable: "--font-salsa",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.className} ${salsa.variable} ${poppins.variable} ${notoSerif.variable}`}
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
    </div>
  );
}
