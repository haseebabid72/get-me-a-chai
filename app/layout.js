import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import SessionWrapper from "@/components/SessionWrapper";
export const metadata = {
  title: "Patreon clone",
  description: "A fun project by @mudasarmajeed5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#00091d] text-white`}>
        <SessionWrapper>
          <Navbar />
          <div className="pb-10 bg-[#00091d]">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
