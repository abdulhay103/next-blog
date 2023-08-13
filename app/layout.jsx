import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Blog",
  description: "This blog side made with ostad platfrom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className=" bg-zinc-300 py-20 container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
