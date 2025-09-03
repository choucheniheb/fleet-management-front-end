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
      <body>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Header />
            <main style={{ padding: '20px' }}>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
