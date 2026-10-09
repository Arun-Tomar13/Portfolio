
import type { Metadata, Viewport } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arun Tomar | Software Engineer",
  description:
    "I'm Arun Tomar, a Software Engineer at Zealous System. Explore my projects, experience, and work across the stack.",
  metadataBase: new URL("https://aruntomar.in"),
  openGraph: {
    title: "Arun Tomar | Software Engineer",
    description:
      "Explore Arun Tomar's projects, experience, and software engineering journey.",
    url: "https://aruntomar.in",
    siteName: "Arun Tomar",
    type: "website",
    images: [
      {
        url: "/images/arun-img.jpeg",
        alt: "Arun Tomar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Tomar | Software Engineer",
    description:
      "Explore Arun Tomar's projects, experience, and software engineering journey.",
    images: ["/images/arun-img.jpeg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0D12",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
