import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "@/components/sidebar/SideBar";
import Header from "@/components/Header";
import PhoneMenu from "@/components/PhoneMenu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Swaraj Phalke - Software Engineer",
  description:
    "Vikas Saini - Software Engineer specializing in React.js and Tailwind CSS. Skilled in building responsive and clean UI/UX designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex w-screen md:h-screen`}
      >
        <SideBar />
        <main className="w-full md:w-3/4 my-4 px-4 md:overflow-auto">
          <Header />
          <div className="px-2 md:px-8 pb-20 md:pb-0">{children}</div>
          <PhoneMenu />
        </main>
      </body>
    </html>
  );
}
