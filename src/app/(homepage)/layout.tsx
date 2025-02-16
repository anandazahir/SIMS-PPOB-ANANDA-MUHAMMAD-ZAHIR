import type { Metadata } from "next";
import { Providers } from "@/lib/redux/Provider";
import "../globals.css";
import { Navbar } from "@/components/Homepage/navbar";

export const metadata: Metadata = {
  title: `SIMS PPOB-Ananda Muhammad Zahir`,
  description: "Tugas Take Home Test Front-End Developer NuTech Telkom ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>
          <Navbar />
          <main className="container mx-auto px-14 py-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
