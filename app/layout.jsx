import { Inter } from "next/font/google";
import NavBar from "./components/navBar";

import "@assets/globals.css";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "3d practicing",
  description: "next & r3f",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
