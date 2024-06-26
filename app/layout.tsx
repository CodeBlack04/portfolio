import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import ContactModal from "@/components/modals/ConatactModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tauhidur - Portfolio",
  description: "This is my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <Navbar />
        <StarsCanvas />
        {children}
        <ContactModal />
      </body>
    </html>
  );
}
