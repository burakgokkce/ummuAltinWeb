import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ümmi Altın | iOS Developer",
  description: "Bilgisayar Müh. 4. sınıf, iOS Developer, AI araçlarını keşfeden, sosyal ve üretken.",
  openGraph: {
    title: "Ümmi Altın | iOS Developer",
    description: "Bilgisayar Müh. 4. sınıf, iOS Developer, AI araçlarını keşfeden, sosyal ve üretken.",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ümmi Altın | iOS Developer",
    description: "Bilgisayar Müh. 4. sınıf, iOS Developer, AI araçlarını keşfeden, sosyal ve üretken.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
