import type { Metadata, Viewport } from "next";
import { Great_Vibes, Montserrat, Noto_Kufi_Arabic } from "next/font/google";
import { HomePage } from "@/components/HomePage";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
  display: "swap",
});

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LACO | The Majestic Signature",
  description: "LACO coffee menu — your favorite place",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "LACO",
  },
  icons: {
    apple: "/images/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#2b180d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${montserrat.variable} ${notoKufi.variable} ${greatVibes.variable}`}>
      <body className="dark-mode loading-state">{children}</body>
    </html>
  );
}
