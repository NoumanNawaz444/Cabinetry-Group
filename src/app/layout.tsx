import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Aoscompo from "@/utils/aos";
import NextTopLoader from "nextjs-toploader";
import { AppContextProvider } from "../context-api/PropertyContext";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";
import Header from "./components/layout/header";
import Head from "next/head";

const dmsans = DM_Sans({ subsets: ["latin"] });

// ✅ Cabinetry Group metadata
export const metadata: Metadata = {
  title: "Cabinetry Group | Premium Cabinetry & Joinery Solutions",
  description:
    "Cabinetry Group specializes in flat pack cabinetry, edging services, vinyl thermolaminated doors, and aluminium glass doors. Bringing quality, precision, and design innovation to every project.",
  keywords: [
    "Cabinetry Group",
    "custom cabinetry",
    "flat pack cabinets",
    "vinyl doors",
    "aluminium doors",
    "thermolaminated panels",
    "cabinet makers",
    "joinery solutions",
  ],
  openGraph: {
    title: "Cabinetry Group | Premium Cabinetry & Joinery Solutions",
    description:
      "Explore Cabinetry Group’s exceptional range of cabinetry products and services — from vinyl doors to aluminium profiles — designed to elevate your interiors.",
    url: "https://cabinetrygroup.com", // update if your domain differs
    siteName: "Cabinetry Group",
    images: [
      {
        url: "/og-image.jpg", // place an image in /public folder
        width: 1200,
        height: 630,
        alt: "Cabinetry Group - Premium Cabinetry & Joinery Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Cabinetry Group | Premium Cabinetry & Joinery Solutions</title>
      </Head>
      <body className={dmsans.className}>
        <AppContextProvider>
          <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
            <Aoscompo>
              <Header />
              <NextTopLoader color="#2563eb" showSpinner={false} />
              <main>{children}</main>
              <Footer />
            </Aoscompo>
            <ScrollToTop />
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
