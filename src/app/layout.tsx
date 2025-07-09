import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Toaster } from "@/components/ui/sonner"; 
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BB Institute Dashboard",
  description: "Student management dashboard for BB Institute",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider defaultOpen={true}>
          {children}
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  )
}
