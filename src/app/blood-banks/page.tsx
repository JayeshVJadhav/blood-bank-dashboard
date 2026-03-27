"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, MapPin, Phone, Trash2 } from "lucide-react";

const defaultBloodBanks = [
  { id: "BB-01", name: "Central City Blood Bank", city: "New York", contact: "+1 (555) 123-4567", admin: "Dr. Sarah Miller" },
  { id: "BB-02", name: "Metro Regional Donor Center", city: "Chicago", contact: "+1 (555) 987-6543", admin: "Dr. James Wilson" },
  { id: "BB-03", name: "Westside Community Blood Services", city: "Los Angeles", contact: "+1 (555) 456-7890", admin: "Dr. Emma Davis" },
  { id: "BB-04", name: "St. Jude Hospital Blood Bank", city: "Houston", contact: "+1 (555) 789-0123", admin: "Dr. Michael Brown" },
];

export default function BloodBanksPage() {
  const [bloodBanks, setBloodBanks] = useState(defaultBloodBanks);
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load ONLY custom blood banks from localStorage (BB-05+)
    const stored = localStorage.getItem("bloodBanks");
    if (stored) {
      try {
        const customBanks = JSON.parse(stored);
        // Filter to only include valid custom banks (IDs > BB-04)
        const validCustomBanks = customBanks.filter((bank: any) => {
          const bankNum = parseInt(bank.id?.split("-")[1] || "0");
          return bankNum > 4;
        });
        setBloodBanks([...defaultBloodBanks, ...validCustomBanks]);
      } catch (e) {
        // If localStorage is corrupted, just use defaults
        setBloodBanks(defaultBloodBanks);
        localStorage.removeItem("bloodBanks");
      }
    }
  }, []);

  const handleDelete = (id: string) => {
    const updated = bloodBanks.filter((bank) => bank.id !== id);
    setBloodBanks(updated);

    // Only store custom banks (BB-05+) in localStorage
    const customToStore = updated.filter((bank) => {
      const bankNum = parseInt(bank.id.split("-")[1] || "0");
      return bankNum > 4;
    });
    
    if (customToStore.length > 0) {
      localStorage.setItem("bloodBanks", JSON.stringify(customToStore));
    } else {
      localStorage.removeItem("bloodBanks");
    }
  };

  const filteredBanks = bloodBanks.filter(
    (bank) =>
      bank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bank.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!mounted) return null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Blood Banks</h1>
          <p className="text-gray-500">Manage affiliated blood banks and centers.</p>
        </div>
        <Link href="/blood-banks/add">
          <Button className="bg-[#E53935] hover:bg-red-700 text-white rounded-full px-6 shadow-sm">
            <Plus className="mr-2 h-4 w-4" /> Add Blood Bank
          </Button>
        </Link>
      </div>

      <Card className="rounded-2xl border-gray-100 shadow-sm overflow-hidden">
        <CardHeader className="border-b border-gray-50 pb-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search blood banks by name or city..."
              className="pl-9 rounded-full bg-gray-50/50 border-gray-200 focus-visible:ring-[#E53935]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow className="border-none">
                <TableHead className="pl-6 font-medium text-gray-500">Blood Bank Name</TableHead>
                <TableHead className="font-medium text-gray-500">Location</TableHead>
                <TableHead className="font-medium text-gray-500">Contact Info</TableHead>
                <TableHead className="font-medium text-gray-500">Administrator</TableHead>
                <TableHead className="text-right pr-6 font-medium text-gray-500">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBanks.length > 0 ? (
                filteredBanks.map((bank) => (
                  <TableRow key={bank.id} className="border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <TableCell className="pl-6">
                      <div className="font-medium text-gray-900">{bank.name}</div>
                      <div className="text-xs text-gray-500">{bank.id}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-1 text-gray-400" /> {bank.city}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-1 text-gray-400" /> {bank.contact}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">{bank.admin}</TableCell>
                    <TableCell className="text-right pr-6">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm" className="text-[#E53935] hover:bg-red-50 hover:text-red-700 rounded-full font-medium">
                          Manage
                        </Button>
                        {!bank.id.startsWith("BB-0") && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(bank.id)}
                            className="text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-full"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                    No blood banks found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
