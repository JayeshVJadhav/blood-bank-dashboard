"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";

export default function AddBloodBankPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    contact: "",
    admin: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.city || !formData.contact || !formData.admin) {
      alert("Please fill in all fields");
      return;
    }

    // Get existing blood banks from localStorage
    const existing = JSON.parse(localStorage.getItem("bloodBanks") || "[]");

    // Create new blood bank with auto-generated ID (starting from BB-05 since we have 4 defaults)
    const newBank = {
      id: `BB-${String(5 + existing.length).padStart(2, "0")}`,
      ...formData,
    };

    // Save to localStorage
    existing.push(newBank);
    localStorage.setItem("bloodBanks", JSON.stringify(existing));

    // Redirect back to blood banks page
    router.push("/blood-banks");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.back()}
          className="text-gray-600 hover:bg-gray-100"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back
        </Button>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Add Blood Bank</h1>
          <p className="text-gray-500">Fill in the details to register a new blood bank.</p>
        </div>
      </div>

      <Card className="rounded-2xl border-gray-100 shadow-sm max-w-2xl">
        <CardHeader className="border-b border-gray-50 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">Blood Bank Information</h2>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blood Bank Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter blood bank name"
                className="rounded-lg border-gray-200 focus-visible:ring-[#E53935]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city name"
                className="rounded-lg border-gray-200 focus-visible:ring-[#E53935]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="rounded-lg border-gray-200 focus-visible:ring-[#E53935]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Administrator Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="admin"
                value={formData.admin}
                onChange={handleChange}
                placeholder="Enter administrator name"
                className="rounded-lg border-gray-200 focus-visible:ring-[#E53935]"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                className="rounded-full"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#E53935] hover:bg-red-700 text-white rounded-full px-6"
              >
                Add Blood Bank
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
