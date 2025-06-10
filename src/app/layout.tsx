import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MY ORANGE AI",
  description: "MY ORANGE AI - Coming Soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
