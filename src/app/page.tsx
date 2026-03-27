import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { InventoryChart } from "@/components/InventoryChart";
import { Droplet, AlertTriangle, Users, ClipboardList } from "lucide-react";

const recentRequests = [
  { id: "REQ-001", patient: "Sarah Miller", group: "O+", location: "City Hospital", status: "Pending" },
  { id: "REQ-002", patient: "James Wilson", group: "A-", location: "St. Jude Clinic", status: "Approved" },
  { id: "REQ-003", patient: "Emma Davis", group: "B+", location: "Metro General", status: "Pending" },
  { id: "REQ-004", patient: "Michael Brown", group: "AB-", location: "Valley Medical", status: "Rejected" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome to BloodLink Blood Bank Management System.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Blood Units</CardTitle>
            <div className="h-10 w-10 flex items-center justify-center bg-red-50 rounded-xl text-[#E53935]">
              <Droplet className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">1,245</div>
            <p className="text-xs text-gray-500 mt-1"><span className="text-green-600 font-medium">+120</span> from last month</p>
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition-shadow ring-1 ring-[#E53935]/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Low Stock Alerts</CardTitle>
            <div className="h-10 w-10 flex items-center justify-center bg-amber-50 rounded-xl text-amber-500">
              <AlertTriangle className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">3</div>
            <p className="text-xs text-gray-500 mt-1">A-, O-, AB- running low</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Donors</CardTitle>
            <div className="h-10 w-10 flex items-center justify-center bg-blue-50 rounded-xl text-blue-500">
              <Users className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">8,439</div>
            <p className="text-xs text-gray-500 mt-1"><span className="text-green-600 font-medium">+42</span> new this week</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending Requests</CardTitle>
            <div className="h-10 w-10 flex items-center justify-center bg-purple-50 rounded-xl text-purple-500">
              <ClipboardList className="h-5 w-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">14</div>
            <p className="text-xs text-gray-500 mt-1">Requires immediate review</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="rounded-2xl border-gray-100 shadow-sm lg:col-span-4 flex flex-col">
          <CardHeader>
            <CardTitle>Blood Inventory</CardTitle>
            <CardDescription>Current available units by blood group.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <InventoryChart />
          </CardContent>
        </Card>
        
        <Card className="rounded-2xl border-gray-100 shadow-sm lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Requests</CardTitle>
            <CardDescription>Latest blood requests from hospitals.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-100 hover:bg-transparent">
                  <TableHead>Patient</TableHead>
                  <TableHead>Group</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentRequests.map((req) => (
                  <TableRow key={req.id} className="border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <TableCell>
                      <div className="font-medium text-gray-900">{req.patient}</div>
                      <div className="text-xs text-gray-500">{req.location}</div>
                    </TableCell>
                    <TableCell>
                      <div className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-[#E53935]/10 text-xs font-semibold text-[#E53935]">
                        {req.group}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {req.status === 'Pending' && <Badge variant="outline" className="text-amber-700 border-amber-200 bg-amber-50">Pending</Badge>}
                      {req.status === 'Approved' && <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">Approved</Badge>}
                      {req.status === 'Rejected' && <Badge variant="outline" className="text-red-700 border-red-200 bg-red-50">Rejected</Badge>}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
