import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Next Blog",
  description: "This blog side made with ostad platfrom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tl from-teal-100 via-slate-50 to-indigo-200 min-h-screen">
        <Header />
        <div className="py-20 container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
