import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Plus } from "lucide-react";

const donors = [
  { id: "D-1029", name: "Alex Johnson", group: "O+", city: "New York", lastDonation: "2023-09-15", availability: "Available" },
  { id: "D-1030", name: "Maria Garcia", group: "A-", city: "Los Angeles", lastDonation: "2023-11-20", availability: "Not Available" },
  { id: "D-1031", name: "David Chen", group: "B+", city: "Chicago", lastDonation: "2023-08-05", availability: "Available" },
  { id: "D-1032", name: "Sarah Williams", group: "AB+", city: "Houston", lastDonation: "2023-10-10", availability: "Available" },
  { id: "D-1033", name: "Robert Taylor", group: "O-", city: "Phoenix", lastDonation: "2023-12-01", availability: "Not Available" },
];

export default function DonorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Donor Management</h1>
          <p className="text-gray-500">View and manage blood donor records.</p>
        </div>
        <Button className="bg-[#E53935] hover:bg-red-700 text-white rounded-full px-6 shadow-sm">
          <Plus className="mr-2 h-4 w-4" /> Add Donor
        </Button>
      </div>

      <Card className="rounded-2xl border-gray-100 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-gray-50 pb-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <Input placeholder="Search donors..." className="pl-9 rounded-full bg-gray-50/50 border-gray-200 focus-visible:ring-[#E53935]" />
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
                <TableHead className="pl-6 font-medium text-gray-500">Donor Info</TableHead>
                <TableHead className="font-medium text-gray-500">Blood Group</TableHead>
                <TableHead className="font-medium text-gray-500">City</TableHead>
                <TableHead className="font-medium text-gray-500">Last Donation</TableHead>
                <TableHead className="font-medium text-gray-500">Status</TableHead>
                <TableHead className="text-right pr-6 font-medium text-gray-500">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {donors.map((donor) => (
                <TableRow key={donor.id} className="border-gray-50 hover:bg-gray-50/50 transition-colors">
                  <TableCell className="pl-6">
                    <div className="font-medium text-gray-900">{donor.name}</div>
                    <div className="text-xs text-gray-500">{donor.id}</div>
                  </TableCell>
                  <TableCell>
                    <div className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-[#E53935]/10 text-xs font-semibold text-[#E53935]">
                      {donor.group}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-600">{donor.city}</TableCell>
                  <TableCell className="text-sm text-gray-600">{donor.lastDonation}</TableCell>
                  <TableCell>
                    {donor.availability === 'Available' ? (
                      <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50 shadow-none font-medium">Available</Badge>
                    ) : (
                      <Badge variant="outline" className="text-gray-600 border-gray-200 bg-gray-50 shadow-none font-medium">Unavailable</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-[#E53935] hover:bg-red-50 rounded-full">View</Button>
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
