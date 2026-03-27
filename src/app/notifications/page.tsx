import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Droplet, UserPlus, CheckCircle2 } from "lucide-react";

const notifications = [
  { id: 1, type: "urgent", icon: Droplet, title: "Critical Low Stock: O-", time: "10 mins ago", read: false, desc: "O- blood group is below critical threshold (30 units). Immediate donor drive recommended." },
  { id: 2, type: "request", icon: Bell, title: "New Urgent Request", time: "2 hours ago", read: false, desc: "City Hospital has requested 5 units of A+ blood immediately." },
  { id: 3, type: "success", icon: CheckCircle2, title: "Donor Drive Completed", time: "Yesterday", read: true, desc: "Metro Regional Donor Drive collected 150 units successfully." },
  { id: 4, type: "info", icon: UserPlus, title: "New Staff Member Added", time: "2 days ago", read: true, desc: "Dr. Emily Davis has been added to the system." },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Notifications</h1>
          <p className="text-gray-500">Stay updated on alerts and system activity.</p>
        </div>
        <Button variant="outline" className="rounded-full text-gray-600 bg-white border-gray-200 hover:bg-gray-50 shadow-sm">
          Mark all as read
        </Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <Card key={notif.id} className={`rounded-xl border-gray-100 shadow-sm transition-colors ${!notif.read ? 'bg-[#E53935]/5 ring-1 ring-[#E53935]/20' : 'bg-white'}`}>
            <CardContent className="p-4 sm:p-6 flex gap-4">
              <div className={`mt-1 h-10 w-10 shrink-0 flex items-center justify-center rounded-full ${
                notif.type === 'urgent' ? 'bg-red-100 text-[#E53935]' :
                notif.type === 'success' ? 'bg-green-100 text-green-600' :
                notif.type === 'request' ? 'bg-amber-100 text-amber-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                <notif.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className={`font-semibold ${!notif.read ? 'text-gray-900' : 'text-gray-700'}`}>
                    {notif.title}
                  </h3>
                  <span className="text-xs text-gray-400 font-medium">{notif.time}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{notif.desc}</p>
                {!notif.read && (
                  <div className="pt-2 flex gap-2">
                    <Button size="sm" className="h-8 rounded-full bg-[#E53935] hover:bg-red-700 text-white text-xs shadow-sm shadow-[#E53935]/20">Take Action</Button>
                    <Button size="sm" variant="ghost" className="h-8 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 text-xs shadow-none">Dismiss</Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
