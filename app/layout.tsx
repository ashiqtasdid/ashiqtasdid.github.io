import Header from "@/components/Header/Header";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const inter = JetBrains_Mono({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="-GzRWCXyrwlwy6OakKLbLiQg3ioCrBlY4CCrQ-BI2U0" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
