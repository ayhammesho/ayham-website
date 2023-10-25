"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Loader from "@/components/ui/Loader";

import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
  }, [isLoading]);

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
        {isLoading ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <Providers>{children}</Providers>
        )}
      </body>
    </html>
  );
}
