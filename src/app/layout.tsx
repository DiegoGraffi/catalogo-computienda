import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/generalComponents/Navbar";
import { Poppins } from "next/font/google";
import "next-cloudinary/dist/cld-video-player.css";
import Footer from "@/components/generalComponents/Footer";
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins} antialiased overflow-x-hidden web-display font-poppins`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
