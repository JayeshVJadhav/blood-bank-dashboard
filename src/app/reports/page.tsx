import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CalendarIcon, FileText } from "lucide-react";
import { InventoryChart } from "@/components/InventoryChart";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-500">Insights and comprehensive data extraction.</p>
        </div>
        <Button className="bg-[#E53935] hover:bg-red-700 text-white rounded-full px-6 shadow-sm">
          <Download className="mr-2 h-4 w-4" /> Export All Data
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl border-gray-100 shadow-sm flex flex-col">
          <CardHeader className="border-b border-gray-50 pb-4 flex flex-row items-baseline justify-between">
            <div>
              <CardTitle>Donation Trends</CardTitle>
              <CardDescription>Monthly blood collection overview.</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="rounded-full shadow-sm text-gray-600 border-gray-200 hover:bg-gray-50">
              <CalendarIcon className="mr-2 h-4 w-4" /> This Year
            </Button>
          </CardHeader>
          <CardContent className="pt-6 flex-1 min-h-[350px] flex items-center justify-center bg-gray-50/30 rounded-b-2xl">
              <span className="text-sm text-gray-500 flex flex-col items-center">
                <FileText className="h-8 w-8 text-gray-300 mb-2" />
                Line Chart Implementation Pending
              </span>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-gray-100 shadow-sm flex flex-col">
          <CardHeader className="border-b border-gray-50 pb-4 flex flex-row items-baseline justify-between">
            <div>
              <CardTitle>Inventory Breakdown</CardTitle>
              <CardDescription>Current blood groups in stock.</CardDescription>
            </div>
            <Button variant="outline" size="icon" className="rounded-full shadow-sm text-gray-500 border-gray-200 hover:bg-gray-50 h-8 w-8">
               <Download className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="pt-6 flex-1 min-h-[350px]">
             <InventoryChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
