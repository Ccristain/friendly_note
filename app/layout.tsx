import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import HeaderBar from "@/components/header";
import Footer from "@/components/footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Baloo+2:wght@400..800&family=Bebas+Neue&family=Fredoka:wght@300..700&family=Lexend:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Baloo+2:wght@400..800&family=Bebas+Neue&family=Fredoka:wght@300..700&family=Lexend:wght@100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-b from-yellow-100 from-75% to-gray-200">
        <div className=" w-full mx-auto max-w-screen-2xl">
          <HeaderBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
