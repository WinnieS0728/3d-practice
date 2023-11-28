import { Inter } from "next/font/google";
import NavBar from "./components/navBar";
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import "@assets/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "3D portfolio",
  description: "next & r3f",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel="icon" href="/microphone.png" type="image/jpeg" sizes="64x64" />
      </head>
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
