import { Inter } from "next/font/google";
// import './globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/assets/css/main.css";
import "../app/assets/css/dashboard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "on-ledger",
  description: "Next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
