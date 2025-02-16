import type { Metadata } from "next";
import "../globals.css";

import { Providers } from "@/lib/redux/Provider";
import { AuthHeader } from "@/components/Auth/AuthHeader";
import { AuthIllustration } from "@/components/Auth/AuthIllustration";

export const metadata: Metadata = {
  title: `SIMS PPOB`,
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
        <section className="flex min-h-screen">
          <section className="flex w-full flex-col items-center justify-center px-4 md:w-1/2">
            <div className="w-full max-w-[400px] space-y-8">
              <AuthHeader />
              <Providers>{children}</Providers>
            </div>
          </section>
          <AuthIllustration />
        </section>
      </body>
    </html>
  );
}
