import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Spotlight, { SpotlightCard } from "@/components/spotlight";
import Header from "@/components/header";
import SocialSidebar from "@/components/social-sidebar";
import EmailSidebar from "@/components/email-sidebar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rudra Pratap Singh | Full Stack Developer",
  description: "Portfolio of Rudra Pratap Singh, a Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}
      >
        <Spotlight>
          <SpotlightCard className='bg-slate-950 text-white min-h-screen'>
            <Header />
            <SocialSidebar />
            <EmailSidebar />
            {children}
            <Footer />
          </SpotlightCard>
        </Spotlight>
      </body>
    </html>
  );
}
