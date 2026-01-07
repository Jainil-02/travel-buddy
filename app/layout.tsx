import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Noto_Sans } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/provider";
import Navbar from "@/components/common/Navbar";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Travel Buddy",
  description: "Your Intelligent Travel Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${notoSans.variable} min-h-screen flex flex-col antialiased`}
      >
        <ThemeProvider>
          <ReduxProvider>

            <main className="flex-1">{children}</main>

          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
