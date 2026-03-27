import { Search, Bell, Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-100 bg-white px-6">
      <div className="flex items-center flex-1">
        <button className="md:hidden p-2 -ml-2 mr-2 text-gray-500">
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for blood banks, donors..."
            className="h-10 w-full rounded-full border border-gray-200 bg-gray-50/50 pl-10 pr-4 text-sm outline-none focus:border-[#E53935]/50 focus:ring-2 focus:ring-[#E53935]/20 focus:bg-white transition-all shadow-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-50 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#E53935] ring-2 ring-white" />
        </button>
        <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#E53935] to-red-400 text-white flex items-center justify-center font-medium text-sm shadow-sm ring-2 ring-white cursor-pointer">
          AD
        </div>
      </div>
    </header>
  );
}
