import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hamiltonshenhouse.com"),

  title: {
    default: "Hamilton’s Hen House",
    template: "%s | Hamilton’s Hen House",
  },

  description:
    "Hamilton’s Hen House offers locally raised fertile quail hatching eggs from our family farm.",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Hamilton’s Hen House",
    description:
      "Locally raised fertile quail hatching eggs from our family farm.",
    url: "https://hamiltonshenhouse.com",
    siteName: "Hamilton’s Hen House",
    images: [
      {
        url: "/logo.png",
        width: 1254,
        height: 1254,
        alt: "Hamilton’s Hen House logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hamilton’s Hen House",
    description:
      "Locally raised fertile quail hatching eggs from our family farm.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
