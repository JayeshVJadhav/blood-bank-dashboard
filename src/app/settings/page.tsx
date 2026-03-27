import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">Settings</h1>
          <p className="text-gray-500">Manage your account settings and preferences.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-64 shrink-0">
          <nav className="flex md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0">
            <a href="#" className="bg-white text-[#E53935] ring-1 ring-gray-100 shadow-sm px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">Profile Settings</a>
            <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">Account Default</a>
            <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">Security</a>
            <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">App Notifications</a>
          </nav>
        </aside>

        <div className="flex-1 space-y-6">
          <Card className="rounded-2xl border-gray-100 shadow-sm">
            <CardHeader className="border-b border-gray-50 pb-4">
              <CardTitle>Profile Details</CardTitle>
              <CardDescription>Update your personal information and application avatar.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-[#E53935] to-red-400 text-white flex items-center justify-center text-2xl font-semibold shadow-md ring-4 ring-white">
                  AD
                </div>
                <Button variant="outline" className="rounded-full text-sm font-medium hover:bg-gray-50 bg-white">Change Avatar</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">First Name</label>
                  <Input defaultValue="Admin" className="rounded-xl border-gray-200 bg-gray-50/50 focus-visible:ring-[#E53935]" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Name</label>
                  <Input defaultValue="User" className="rounded-xl border-gray-200 bg-gray-50/50 focus-visible:ring-[#E53935]" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input defaultValue="admin@bloodlink.com" type="email" className="rounded-xl border-gray-200 bg-gray-50/50 focus-visible:ring-[#E53935]" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Role</label>
                  <Input defaultValue="System Administrator" disabled className="rounded-xl bg-gray-100 border-gray-200 text-gray-500" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-gray-50 pt-4 flex justify-end">
              <Button className="rounded-full bg-[#E53935] hover:bg-red-700 text-white shadow-sm shadow-[#E53935]/20 px-6">Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
