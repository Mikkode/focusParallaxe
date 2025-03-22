import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FocusFlow - Coaching pour entrepreneurs",
  description: "Débloquez votre potentiel et transformez votre business avec notre coaching personnalisé",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  )
}
