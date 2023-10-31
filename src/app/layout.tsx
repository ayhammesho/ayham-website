import "./globals.css";

import { Inter } from "next/font/google";

import { Providers } from "./providers";
import { Metadata } from "next";
export const metadata: Metadata = {
  //other meta data key values here...
  title: "Ayham Mesho",
  description:
    "Hi my name is Ayham Mesho I’m software engineer specializing in building (and occasionally designing) exceptional digital experiences.",
  openGraph: {
    title: "Ayham Mesho",
    description:
      "Hi my name is Ayham Mesho I’m software engineer specializing in building (and occasionally designing) exceptional digital experiences.",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#0b2545" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
