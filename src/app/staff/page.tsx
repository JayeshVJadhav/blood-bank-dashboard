import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Plus, Phone, Mail } from "lucide-react";

const staffList = [
  { id: "EMP-001", name: "Dr. Robert Smith", role: "Doctor", department: "Transfusion Medicine", phone: "+1 555-0101", email: "r.smith@bloodlink.com", status: "Active" },
  { id: "EMP-002", name: "Jane Foster", role: "Nurse", department: "Donor Floor", phone: "+1 555-0102", email: "j.foster@bloodlink.com", status: "Active" },
  { id: "EMP-003", name: "Michael Chang", role: "Admin", department: "Operations", phone: "+1 555-0103", email: "m.chang@bloodlink.com", status: "Active" },
  { id: "EMP-004", name: "Emily Davis", role: "Nurse", department: "Donor Floor", phone: "+1 555-0104", email: "e.davis@bloodlink.com", status: "On Leave" },
];

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Staff Management</h1>
          <p className="text-gray-500">Manage internal blood bank staff and doctors.</p>
        </div>
        <Button className="bg-[#E53935] hover:bg-red-700 text-white rounded-full px-6 shadow-sm">
          <Plus className="mr-2 h-4 w-4" /> Add Staff Member
        </Button>
      </div>

      <Card className="rounded-2xl border-gray-100 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-gray-50 pb-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search staff..." className="pl-9 rounded-full bg-gray-50/50 border-gray-200 focus-visible:ring-[#E53935]" />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button variant="outline" className="rounded-full border-gray-200 text-gray-600 w-full sm:w-auto hover:bg-gray-50">
                <Filter className="mr-2 h-4 w-4" /> Roles
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow className="border-none">
                <TableHead className="pl-6 font-medium text-gray-500">Staff Member</TableHead>
                <TableHead className="font-medium text-gray-500">Role & Dept</TableHead>
                <TableHead className="font-medium text-gray-500">Contact</TableHead>
                <TableHead className="font-medium text-gray-500">Status</TableHead>
                <TableHead className="text-right pr-6 font-medium text-gray-500">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staffList.map((staff) => (
                <TableRow key={staff.id} className="border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <TableCell className="pl-6">
                    <div className="font-medium text-gray-900">{staff.name}</div>
                    <div className="text-xs text-gray-500">{staff.id}</div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium text-gray-700 text-sm">{staff.role}</div>
                    <div className="text-xs text-gray-500">{staff.department}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1 text-xs text-gray-600">
                      <span className="flex items-center"><Phone className="h-3 w-3 mr-1 text-gray-400" /> {staff.phone}</span>
                      <span className="flex items-center"><Mail className="h-3 w-3 mr-1 text-gray-400" /> {staff.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {staff.status === 'Active' ? (
                      <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50 shadow-none font-medium">Active</Badge>
                    ) : (
                      <Badge variant="outline" className="text-gray-600 border-gray-200 bg-gray-50 shadow-none font-medium">On Leave</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <Button variant="ghost" size="sm" className="text-[#E53935] hover:bg-red-50 hover:text-red-700 rounded-full font-medium">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
