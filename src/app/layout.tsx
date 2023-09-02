import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning Journey",
  description: "AI based Course Maker System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
