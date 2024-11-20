import type { Metadata } from "next";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Versha Verma",
  description: "a gift from a fan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
