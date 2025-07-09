"use client"

import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { ChartsSection } from "@/components/charts-section"
import { StudentDetailsTable } from "@/components/student-details-table"
import { RightSidebar } from "@/components/right-sidebar"
import type { Student } from "@/types/student"
import { AppSidebar } from "@/components/app-sidebar"

export default function Dashboard() {
  const [students, setStudents] = useState<Student[]>([])

  // Refs for animation
  const headerRef = useRef(null)
  const sidebarRef = useRef(null)
  const tableRef = useRef(null)
  const cardsRef = useRef(null)
  const chartsRef = useRef(null)
  const sideRef = useRef(null)

 
  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
    tl.from(sideRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    })


      .from(sidebarRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, "-=0.4")
      .from(tableRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }, "-=0.3")
      .from([cardsRef.current, chartsRef.current], {
        opacity: 0,
        y: 30,
        stagger: 0.5,
        duration: 1,
        ease: "power2.out",
      }, "-=0.4")
  }, [])

  useEffect(() => {
    const savedStudents = localStorage.getItem("students")
    if (savedStudents) {
      setStudents(JSON.parse(savedStudents))
    } else {
      const initialStudents: Student[] = [
        { id: "1", name: "Vijayabala", status: "Enrolled", course: "UI/UX Design", enrolled: "19/04/2023", progress: 75 },
        { id: "2", name: "Pranav", status: "Enrolled", course: "Full Stack Development", enrolled: "18/04/2023", progress: 60 },
        { id: "3", name: "Anil", status: "Enrolled", course: "Front-End Development", enrolled: "20/04/2023", progress: 85 },
        { id: "4", name: "Ajith", status: "Enrolled", course: "Back-End Development", enrolled: "15/03/2023", progress: 90 },
        { id: "5", name: "Manohar", status: "Enrolled", course: "UI/UX Design", enrolled: "20/03/2023", progress: 45 },
        { id: "6", name: "Arun", status: "Enrolled", course: "Front-End Development", enrolled: "03/04/2023", progress: 70 },
      ]
      setStudents(initialStudents)
      localStorage.setItem("students", JSON.stringify(initialStudents))
    }
  }, [])

  const updateStudents = (newStudents: Student[]) => {
    setStudents(newStudents)
    localStorage.setItem("students", JSON.stringify(newStudents))
  }

  return (
    <><div className="flex min-h-screen w-full">

      <AppSidebar />

      <main className="flex-1 bg-gray-50">

        <div className="flex min-h-screen overflow-hidden
    ">
          <div className="flex-1 p-6">
            <div ref={headerRef}>
              <DashboardHeader />
            </div>
            <div className="mt-6" ref={cardsRef}>
              <StatsCards students={students} />
            </div>
            <div className="mt-6" ref={chartsRef}>
              <ChartsSection students={students} />
            </div>
            <div className="mt-6" ref={tableRef}>
              <StudentDetailsTable students={students} onUpdateStudents={updateStudents} />
            </div>
          </div>
          <div ref={sidebarRef}>
            <RightSidebar />
          </div>
        </div>
      </main>
    </div>
    </>

  )
}
