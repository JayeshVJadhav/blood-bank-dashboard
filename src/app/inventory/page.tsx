import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Droplet } from "lucide-react";

const inventory = [
  { group: "A+", units: 120, status: "Optimal" },
  { group: "A-", units: 45, status: "Low Stock" },
  { group: "B+", units: 150, status: "Optimal" },
  { group: "B-", units: 20, status: "Critical" },
  { group: "AB+", units: 80, status: "Optimal" },
  { group: "AB-", units: 15, status: "Critical" },
  { group: "O+", units: 200, status: "Optimal" },
  { group: "O-", units: 30, status: "Low Stock" },
];

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Blood Inventory</h1>
          <p className="text-gray-500">Manage and monitor blood stock levels.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {inventory.map((item) => (
          <Card key={item.group} className={`rounded-2xl shadow-sm transition-shadow hover:shadow-md ${['Critical', 'Low Stock'].includes(item.status) ? 'border-red-200 ring-1 ring-red-100' : 'border-gray-100'}`}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <span className={`inline-flex items-center justify-center h-8 w-8 rounded-lg text-sm ${['Critical', 'Low Stock'].includes(item.status) ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                  {item.group}
                </span>
              </CardTitle>
              <Droplet className={`h-5 w-5 ${['Critical', 'Low Stock'].includes(item.status) ? 'text-red-500' : 'text-gray-300'}`} />
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <div className={`text-3xl font-bold ${['Critical', 'Low Stock'].includes(item.status) ? 'text-red-600' : 'text-gray-900'}`}>
                  {item.units}
                </div>
                <span className="text-sm font-medium text-gray-500">units</span>
              </div>
              <div className="mt-2 flex items-center text-xs">
                {item.status === 'Critical' && <span className="flex items-center text-red-600 font-medium"><AlertCircle className="w-3 h-3 mr-1" /> Critical Shortage</span>}
                {item.status === 'Low Stock' && <span className="flex items-center text-amber-600 font-medium"><AlertCircle className="w-3 h-3 mr-1" /> Low Stock Warning</span>}
                {item.status === 'Optimal' && <span className="flex items-center text-green-600 font-medium">Stock Levels Normal</span>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
