import type { Metadata } from "next";
import { Sometype_Mono } from "next/font/google";
import "./globals.scss";

const someTypeMono = Sometype_Mono({
  weight: ["400", "700", "500", "600"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-some-type-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adela Kiel",
  description: "For the assertive woman",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dx0suitcr/image/upload/v1728396129/favicon_v3vlbv.ico",
        sizes: "any",
      },
    ],
  },
  openGraph: {
    title: "Adel Kiel",
    description: "For the assertive woman",
    type: "website",
    url: "/",
    images: [
      "https://res.cloudinary.com/dx0suitcr/image/upload/v1728395900/og-graph-img_zcjtf3.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={someTypeMono.variable}>{children}</body>
    </html>
  );
}
