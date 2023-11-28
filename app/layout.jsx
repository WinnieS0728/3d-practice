import { Inter } from "next/font/google";
import NavBar from "./components/navBar";
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
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
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
      </body>
    </html>
  );
}
