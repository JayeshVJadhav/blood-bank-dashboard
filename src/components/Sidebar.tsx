"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Droplet, Users, Building2, ClipboardList, UserCog, BarChart3, Bell, Settings, LogOut } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Blood Inventory", href: "/inventory", icon: Droplet },
  { name: "Donors", href: "/donors", icon: Users },
  { name: "Blood Banks", href: "/blood-banks", icon: Building2 },
  { name: "Requests", href: "/requests", icon: ClipboardList, badge: "24" },
  { name: "Staff Management", href: "/staff", icon: UserCog },
  { name: "Reports", href: "/reports", icon: BarChart3 },
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-[#E53935]">
      <div className="flex h-20 items-center px-6 mt-4">
        <div className="flex items-center justify-center p-2 rounded-xl bg-white text-[#E53935] mr-3 font-bold px-3">
          <Droplet className="h-5 w-5 fill-current" />
        </div>
        <span className="text-xl font-bold text-white tracking-wide">BloodLink</span>
      </div>
      <div className="flex-1 overflow-y-auto py-6">
        <nav className="flex flex-col gap-2 pl-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <div key={item.href} className="relative group">
                {isActive && (
                  <>
                    <div
                      className="absolute right-0 -top-[20px] h-[20px] w-[20px] bg-transparent pointer-events-none"
                      style={{
                        borderBottomRightRadius: "20px",
                        boxShadow: "10px 10px 0 10px #f9fafb",
                      }}
                    />
                    <div
                      className="absolute right-0 -bottom-[20px] h-[20px] w-[20px] bg-transparent pointer-events-none"
                      style={{
                        borderTopRightRadius: "20px",
                        boxShadow: "10px -10px 0 10px #f9fafb",
                      }}
                    />
                  </>
                )}
                <Link
                  href={item.href}
                  className={`relative flex items-center px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gray-50 text-[#E53935] rounded-l-3xl z-10"
                      : "text-white/80 hover:bg-white/10 hover:text-white rounded-l-3xl"
                  }`}
                >
                  <item.icon className={`mr-4 h-5 w-5 transition-colors ${isActive ? "text-[#E53935]" : "text-white/80 group-hover:text-white"}`} />
                  {item.name}
                  {item.badge && (
                    <span className={`ml-auto px-2 py-0.5 rounded-full text-xs font-bold ${isActive ? "bg-red-100 text-red-600" : "bg-white text-[#E53935]"}`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
      <div className="p-4 mb-4 pl-6">
        <button className="flex w-[calc(100%-1.5rem)] items-center px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white rounded-3xl transition-colors">
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
