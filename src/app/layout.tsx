import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "We Want Waste",
  description: "Skip Hire With a Difference",
};

const RootLayout =({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;