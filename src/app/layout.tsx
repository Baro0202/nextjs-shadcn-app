import React from "react";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

import { ReactNode } from "react";

export const metadata = {
  title: "Next.js App",
  description: "Created with Next.js, Shadcn UI and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
