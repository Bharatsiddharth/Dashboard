"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Student } from "@/types/student"

interface ChartsSectionProps {
  students: Student[]
}

export function ChartsSection({ students }: ChartsSectionProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue Chart */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Revenue</CardTitle>
          <Select defaultValue="week">
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-500 mb-4">Income & Expenses Comparison</div>
          <div className="h-64 flex items-end justify-between space-x-2">
            {/* Mock chart bars */}
            {[40, 60, 45, 80, 65, 90, 75].map((height, index) => (
              <div key={index} className="flex flex-col items-center space-y-1">
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-8 bg-blue-500 rounded-t" style={{ height: `${height}px` }}></div>
                  <div className="w-8 bg-red-400 rounded-b" style={{ height: `${height * 0.6}px` }}></div>
                </div>
                <div className="text-xs text-gray-500">{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][index]}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm text-gray-600">Income</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded"></div>
              <span className="text-sm text-gray-600">Expenses</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Placement Data Chart */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold">Placement Data</CardTitle>
          <Select defaultValue="2023">
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-500 mb-4">Placed Students: 1600</div>
          <div className="h-64 flex items-end justify-between space-x-2">
            {/* Mock placement chart */}
            {[
              { placed: 60, visited: 40 },
              { placed: 80, visited: 50 },
              { placed: 70, visited: 45 },
              { placed: 90, visited: 60 },
              { placed: 75, visited: 55 },
              { placed: 85, visited: 50 },
            ].map((data, index) => (
              <div key={index} className="flex flex-col items-center space-y-1">
                <div className="flex space-x-1">
                  <div className="w-6 bg-blue-500 rounded-t" style={{ height: `${data.placed}px` }}></div>
                  <div className="w-6 bg-red-400 rounded-t" style={{ height: `${data.visited}px` }}></div>
                </div>
                <div className="text-xs text-gray-500">
                  {["Jan-Mar", "Apr-May", "May-Jun", "Jul-Oct", "Oct-Nov", "Dec-Jan"][index]}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-sm text-gray-600">No. of Students Placed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded"></div>
              <span className="text-sm text-gray-600">No. of Companies Visited</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
