import Navbar from "@/components/Navbar/Navbar";
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
          <Navbar />
          <main className="w-full h-full py-10 md:py-18 md:ml-48">
            {children}
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
