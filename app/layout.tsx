import { Metadata } from "next";
import { Toaster } from "sonner";

import "./globals.css"

import { Navbar } from "@/components/custom/layout/navbar";
import { ThemeProvider } from "@/components/custom/theme-provider";

export const metadata: Metadata = {
  title: "AI Teaching - 智能教育助手",
  description: "AI赋能教育，激发学习兴趣，培养自学能力",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster position="top-center" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}