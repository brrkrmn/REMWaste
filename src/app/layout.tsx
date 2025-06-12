import Navbar from "@/components/Navbar/Navbar";
import SkipsProvider from "@/context/skips/skipsProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider/ReactQueryProvider";
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
      <body className="container responsiveFlex min-h-screen">
        <ReactQueryProvider>
          <SkipsProvider>
            <Navbar />
            <main className="w-full min-h-screen py-10 md:py-18 md:ml-48">
              {children}
            </main>
          </SkipsProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
