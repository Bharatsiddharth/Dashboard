import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Eye, Clock, Users } from "lucide-react"

export function RightSidebar() {
  const trainers = [
    {
      name: "Aravl",
      role: "Full Stack Developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Saranya",
      role: "Front-End Development",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Bala",
      role: "UI/UX Designer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Saranya",
      role: "Front-End Developer",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const courses = [
    {
      title: "UI/UX Design",
      lessons: "12 Lessons",
      color: "bg-blue-500",
    },
    {
      title: "Full Stack Development",
      lessons: "20 Lessons",
      color: "bg-teal-500",
    },
    {
      title: "Front-End Development",
      lessons: "16 Lessons",
      color: "bg-purple-500",
    },
  ]

  const currentDate = new Date()
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  return (
    <div className="w-80 p-6 space-y-6 bg-white border-l">
      {/* Active Trainers */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Active Trainers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Mini Calendar */}
          <div className="mb-4">
            <div className="grid grid-cols-7 gap-1 text-xs text-center mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-1 font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-xs">
              {Array.from({ length: firstDayOfMonth }, (_, i) => (
                <div key={`empty-${i}`} className="p-1"></div>
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const day = i + 1
                const isToday = day === currentDate.getDate()
                return (
                  <div
                    key={day}
                    className={`p-1 text-center cursor-pointer rounded ${
                      isToday ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {day}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Trainers List */}
          <div className="space-y-3">
            {trainers.map((trainer, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={trainer.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{trainer.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm">{trainer.name}</div>
                    <div className="text-xs text-gray-500">{trainer.role}</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Active Courses */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Active Courses</CardTitle>
          <Button variant="ghost" size="sm" className="text-blue-600">
            See all
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${course.color} rounded-lg flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                </div>
                <div>
                  <div className="font-medium text-sm">{course.title}</div>
                  <div className="text-xs text-gray-500">{course.lessons}</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-600">
                View More
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Webinar Card */}
      <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Webinar</h3>
            <p className="text-sm opacity-90 mb-4">Turn Your IT Strategy Into Reality With an Executive Blueprint</p>
          </div>

          <div className="flex items-center gap-4 text-sm mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>30 Minutes</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>30 June 2023</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span className="text-sm">Join now</span>
            </div>
            <Button size="sm" variant="secondary" className="text-indigo-600">
              Join
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
