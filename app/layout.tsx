import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import SinglePage from "./[slug]/SinglePage";
import ListPage from "./list/page";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
   
        <Navbar />
        <ListPage />

        <SinglePage />
         {children}
        <Footer />
           
 
        </body>
   
    </html>
  );
}