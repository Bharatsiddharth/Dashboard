"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Student } from "@/types/student"

interface StudentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  student: Student | null
  onSave: (student: Student) => void
}

export function StudentDialog({ open, onOpenChange, student, onSave }: StudentDialogProps) {
  const [formData, setFormData] = useState<Partial<Student>>({
    name: "",
    status: "Enrolled",
    course: "",
    enrolled: "",
    progress: 0,
  })

  useEffect(() => {
    if (student) {
      setFormData(student)
    } else {
      setFormData({
        name: "",
        status: "Enrolled",
        course: "",
        enrolled: new Date().toLocaleDateString("en-GB"),
        progress: 0,
      })
    }
  }, [student, open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.course && formData.enrolled) {
      onSave(formData as Student)
    }
  }

  const courses = [
    "UI/UX Design",
    "Full Stack Development",
    "Front-End Development",
    "Back-End Development",
    "Data Science",
    "Mobile Development",
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{student ? "Edit Student" : "Add New Student"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Student Name</Label>
            <Input
              id="name"
              value={formData.name || ""}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter student name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Enrolled">Enrolled</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Unenrolled">Unenrolled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Course</Label>
            <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course} value={course}>
                    {course}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="enrolled">Enrollment Date</Label>
            <Input
              id="enrolled"
              type="date"
              value={formData.enrolled ? formData.enrolled.split("/").reverse().join("-") : ""}
              onChange={(e) => {
                const date = new Date(e.target.value)
                const formattedDate = date.toLocaleDateString("en-GB")
                setFormData({ ...formData, enrolled: formattedDate })
              }}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="progress">Progress (%)</Label>
            <Input
              id="progress"
              type="number"
              min="0"
              max="100"
              value={formData.progress || 0}
              onChange={(e) => setFormData({ ...formData, progress: Number.parseInt(e.target.value) || 0 })}
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">{student ? "Update" : "Add"} Student</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
