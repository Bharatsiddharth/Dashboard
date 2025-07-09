"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboard, BookOpen, Users, UserCheck, MessageSquare, CreditCard, Settings } from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Courses",
    icon: BookOpen,
    isActive: false,
  },
  {
    title: "Students",
    icon: Users,
    isActive: false,
  },
  {
    title: "Trainers",
    icon: UserCheck,
    isActive: false,
  },
  {
    title: "Message",
    icon: MessageSquare,
    isActive: false,
  },
  {
    title: "Payment",
    icon: CreditCard,
    isActive: false,
  },
  {
    title: "Settings",
    icon: Settings,
    isActive: false,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0">
      <div className="h-full bg-gradient-to-b from-indigo-600 to-purple-700">
        <SidebarHeader className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-indigo-600 font-bold text-lg">BB</span>
            </div>
            <div className="text-white">
              <div className="font-semibold">BB Institute</div>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="px-4">
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  className={`w-full justify-start text-white/80 hover:text-white hover:bg-white/10 ${
                    item.isActive ? "bg-white/20 text-white" : ""
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </div>
    </Sidebar>
  )
}
