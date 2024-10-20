import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterComp from "./components/FooterComp";
import connect from "../dbconnect";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAIRA - smart ai recipe assistant",
  description:
    "these website is usefull for those who are foodie and want to try new recipes",
};

export default async function RootLayout({
  children,
}) {
  await connect();
  return (


    <html lang="en" rel="icon" href="favicon.png" className="h-full">
      <SessionProvider>
        <body className={`${inter.className} h-full`}>
          <Navbar />
          <div className="pt-[64px]">

          {children}
          </div>
          <FooterComp />
        </body>
      </SessionProvider>
      
    </html>
  );
}
