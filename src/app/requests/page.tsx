import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, CheckCircle2, XCircle, Eye } from "lucide-react";

const requests = [
  { id: "REQ-001", patient: "Sarah Miller", group: "O+", location: "City Hospital", status: "Pending", date: "2023-12-10" },
  { id: "REQ-002", patient: "James Wilson", group: "A-", location: "St. Jude Clinic", status: "Approved", date: "2023-12-09" },
  { id: "REQ-003", patient: "Emma Davis", group: "B+", location: "Metro General", status: "Pending", date: "2023-12-09" },
  { id: "REQ-004", patient: "Michael Brown", group: "AB-", location: "Valley Medical", status: "Rejected", date: "2023-12-08" },
  { id: "REQ-005", patient: "Jessica Lee", group: "O-", location: "Central Clinic", status: "Approved", date: "2023-12-08" },
];

export default function RequestsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Requests Management</h1>
          <p className="text-gray-500">Review and process blood requests from hospitals.</p>
        </div>
      </div>

      <Card className="rounded-2xl border-gray-100 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-gray-50 pb-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search requests..." className="pl-9 rounded-full bg-gray-50/50 border-gray-200 focus-visible:ring-[#E53935]" />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button variant="outline" className="rounded-full border-gray-200 text-gray-600 w-full sm:w-auto hover:bg-gray-50">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow className="border-none">
                <TableHead className="pl-6 font-medium text-gray-500">Patient Details</TableHead>
                <TableHead className="font-medium text-gray-500">Blood Group</TableHead>
                <TableHead className="font-medium text-gray-500">Location</TableHead>
                <TableHead className="font-medium text-gray-500">Date</TableHead>
                <TableHead className="font-medium text-gray-500">Status</TableHead>
                <TableHead className="text-right pr-6 font-medium text-gray-500">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((req) => (
                <TableRow key={req.id} className="border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <TableCell className="pl-6">
                    <div className="font-medium text-gray-900">{req.patient}</div>
                    <div className="text-xs text-gray-500">{req.id}</div>
                  </TableCell>
                  <TableCell>
                    <div className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-[#E53935]/10 text-xs font-semibold text-[#E53935]">
                      {req.group}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{req.location}</TableCell>
                  <TableCell className="text-sm text-gray-600">{req.date}</TableCell>
                  <TableCell>
                    {req.status === 'Pending' && <Badge variant="outline" className="text-amber-700 border-amber-200 bg-amber-50 shadow-none font-medium">Pending</Badge>}
                    {req.status === 'Approved' && <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50 shadow-none font-medium">Approved</Badge>}
                    {req.status === 'Rejected' && <Badge variant="outline" className="text-red-700 border-red-200 bg-red-50 shadow-none font-medium">Rejected</Badge>}
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <div className="flex justify-end gap-2">
                      {req.status === 'Pending' && (
                        <>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50 rounded-full">
                            <CheckCircle2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-[#E53935] hover:bg-red-50 rounded-full">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
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
