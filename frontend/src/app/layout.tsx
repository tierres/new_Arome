import { Josefin_Sans } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

// Fonte global
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Aromê",
  description: "E-commerce de chás, infusões e utensílios",
  viewport: "width=device-width, initial-scale=1.0",
  icons: {
    icon: "/arome-reduced-logo.svg",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={josefinSans.className}>
        {children}
      </body>
    </html>
  );
}
