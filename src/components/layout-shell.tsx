"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { AppSidebar } from "@/components/app-sidebar"

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const sidebarRef = useRef(null)

  useEffect(() => {
    gsap.from(sidebarRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
  }, [])

  return (
    
     <>
        
      <main className="flex-1 bg-gray-50">{children}</main>
   
     </>
  )
}
