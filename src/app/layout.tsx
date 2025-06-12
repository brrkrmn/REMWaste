import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "We Want Waste",
  description: "Skip Hire With a Difference",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={dmSans.className}>
      <body className="container responsiveFlex">
        <Navbar />
        <main className="w-full h-full min-h-screen py-10">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
