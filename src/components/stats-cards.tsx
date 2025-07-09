import { Card, CardContent } from "@/components/ui/card"
import type { Student } from "@/types/student"

interface StatsCardsProps {
  students: Student[]
}

export function StatsCards({ students }: StatsCardsProps) {
  const totalStudents = students.length
  const newStudents = students.filter((s) => {
    const enrolledDate = new Date(s.enrolled.split("/").reverse().join("-"))
    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
    return enrolledDate > oneMonthAgo
  }).length

  const trainedStudents = students.filter((s) => s.progress >= 80).length

  const stats = [
    {
      title: "Total User",
      value: "2201",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Total Students",
      value: totalStudents.toString(),
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "New Students",
      value: newStudents.toString(),
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
    },
    {
      title: "Trained Students",
      value: trainedStudents.toString(),
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className={`${stat.bgColor} border-0`}>
          <CardContent className="p-6">
            <div className={`text-3xl font-bold ${stat.textColor} mb-2`}>{stat.value}</div>
            <div className="text-gray-600 text-sm font-medium">{stat.title}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
