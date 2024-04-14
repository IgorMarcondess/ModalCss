import type { Metadata } from "next";
import Header from "./Header/page"
import Footer from "./Footer/page"

export const metadata: Metadata = {
  title: "AMR",
  description: "Sprint 4 - AMR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        { children }
        <Footer />
      </body>
    </html>
  );
}
