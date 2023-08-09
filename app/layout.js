import "./globals.css";
import User from "@/components/User";
import SidebarLinks from "@/components/sidebar_links";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./provider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Blog",
  description: "A personel Blog Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <NextAuthProvider>
          <main className="flex h-full">
            <div className="flex flex-sidebar flex-col pt-6 bg-sidebar-bg text-white rounded-r-md max-w-[12%] min-w-fit">
              <div className="w-full pl-6">
                <p className=" font-bold text-4xl">The Blog</p>
              </div>
              <div className="w-full pt-12 pr-4">
                <User />
              </div>
              <div className="w-full py-16 pl-6">
                <SidebarLinks />
              </div>
            </div>
            {children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
