import { Ubuntu } from "next/font/google";
import "./globals.css";

const font = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "A little gift",
  description: "Make with love for you | by toan10bits",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
