"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MoreHorizontal, Plus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Student } from "@/types/student"
import { StudentDialog } from "@/components/student-dialog"

interface StudentDetailsTableProps {
  students: Student[]
  onUpdateStudents: (students: Student[]) => void
}

export function StudentDetailsTable({ students, onUpdateStudents }: StudentDetailsTableProps) {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([])
  const [filter, setFilter] = useState<string>("all")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingStudent, setEditingStudent] = useState<Student | null>(null)

  const filteredStudents = students.filter((student) => {
    if (filter === "all") return true
    return student.status.toLowerCase() === filter.toLowerCase()
  })

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedStudents(filteredStudents.map((s) => s.id))
    } else {
      setSelectedStudents([])
    }
  }

  const handleSelectStudent = (studentId: string, checked: boolean) => {
    if (checked) {
      setSelectedStudents([...selectedStudents, studentId])
    } else {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId))
    }
  }

  const handleAddStudent = () => {
    setEditingStudent(null)
    setDialogOpen(true)
  }

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student)
    setDialogOpen(true)
  }

  const handleDeleteStudent = (studentId: string) => {
    const updatedStudents = students.filter((s) => s.id !== studentId)
    onUpdateStudents(updatedStudents)
  }

  const handleSaveStudent = (student: Student) => {
    if (editingStudent) {
      // Update existing student
      const updatedStudents = students.map((s) => (s.id === student.id ? student : s))
      onUpdateStudents(updatedStudents)
    } else {
      // Add new student
      const newStudent = {
        ...student,
        id: Date.now().toString(),
      }
      onUpdateStudents([...students, newStudent])
    }
    setDialogOpen(false)
    setEditingStudent(null)
  }

  const filterButtons = [
    { label: "View all", value: "all" },
    { label: "Enrolled", value: "enrolled" },
    { label: "Active now", value: "active" },
    { label: "Unenrolled", value: "unenrolled" },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Student Details</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">See all</span>
            <Button onClick={handleAddStudent} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Student
            </Button>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          {filterButtons.map((button) => (
            <Button
              key={button.value}
              variant={filter === button.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(button.value)}
              className={filter === button.value ? "bg-blue-600 text-white" : ""}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">
                  <Checkbox
                    checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Students</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Course</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Enrolled</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Progress</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <Checkbox
                      checked={selectedStudents.includes(student.id)}
                      onCheckedChange={(checked) => handleSelectStudent(student.id, checked as boolean)}
                    />
                  </td>
                  <td className="py-4 px-4 font-medium">{student.name}</td>
                  <td className="py-4 px-4">
                    <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                      ● {student.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{student.course}</td>
                  <td className="py-4 px-4 text-gray-600">{student.enrolled}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <Progress value={student.progress} className="w-20 h-2" />
                      <span className="text-sm text-gray-600">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleEditStudent(student)}>Edit</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteStudent(student.id)} className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>

      <StudentDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        student={editingStudent}
        onSave={handleSaveStudent}
      />
    </Card>
  )
}
