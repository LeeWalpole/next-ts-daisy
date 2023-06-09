import "./globals.css";
import { Inter } from "next/font/google";
import NavBottom from "@/components/NavBottom";
import NavTop from "@/components/NavTop";
import NavSide from "@/components/NavSide";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavTop />
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <main className="">
              {children}
              <NavBottom />
            </main>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <NavSide />
          </div>
        </div>
      </body>
    </html>
  );
}
