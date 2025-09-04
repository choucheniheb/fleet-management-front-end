import "./globals.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Fleet Management",
  description: "Fleet Management Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-4 overflow-y-auto">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
