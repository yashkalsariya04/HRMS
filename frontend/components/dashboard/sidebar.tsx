"use client";

import {
  BarChart3,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileText,
  LayoutDashboard,
  Settings,
  Users,
  Wallet,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Employees",
    icon: Users,
    children: [
      "All Employees",
      "Departments",
      "Designations",
    ],
  },
  {
    title: "Attendance",
    icon: Clock3,
  },
  {
    title: "Leave",
    icon: CalendarDays,
  },
  {
    title: "Payroll",
    icon: Wallet,
  },
  {
    title: "Documents",
    icon: FileText,
  },
  {
    title: "Performance",
    icon: ClipboardCheck,
  },
  {
    title: "Reports",
    icon: BarChart3,
  },
];

export function Sidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[252px] flex-col border-r bg-[#fafafa]">
      
      {/* Logo */}
      <div className="flex h-[64px] items-center border-b px-5">
        <div className="flex items-center gap-3">
          
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1677ff] text-lg font-bold text-white">
            H
          </div>

          <span className="text-[18px] font-semibold tracking-tight">
            HRMS
          </span>

        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4">

        <div className="mb-2 px-3 text-[11px] font-medium uppercase tracking-wider text-[#999]">
          Workspace
        </div>

        <nav className="space-y-1">

          {menuItems.map((item) => {
            const Icon = item.icon;
            const hasChildren = !!item.children?.length;

            const isOpen = openMenu === item.title;

            return (
              <div key={item.title}>

                <button
                  type="button"
                  onClick={() => {
                    if (hasChildren) {
                      setOpenMenu(isOpen ? null : item.title);
                    }
                  }}
                  className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-[14px] transition-colors ${
                    item.title === "Dashboard"
                      ? "bg-[#eeeeee] font-medium text-[#171717]"
                      : "text-[#444] hover:bg-[#eeeeee]"
                  }`}
                >

                  <span className="flex items-center gap-3">
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                    />

                    {item.title}
                  </span>

                  {hasChildren && (
                    <ChevronDown
                      size={15}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}

                </button>

                {/* Sub Menu */}
                {hasChildren && isOpen && (
                  <div className="ml-9 mt-1 space-y-1">

                    {item.children?.map((child) => (
                      <button
                        key={child}
                        type="button"
                        className="flex w-full items-center rounded-md px-3 py-2 text-left text-[13px] text-[#666] transition-colors hover:bg-[#eeeeee] hover:text-[#171717]"
                      >
                        {child}
                      </button>
                    ))}

                  </div>
                )}

              </div>
            );
          })}

        </nav>

        {/* Divider */}
        <div className="my-5 border-t" />

        {/* System */}
        <div className="mb-2 px-3 text-[11px] font-medium uppercase tracking-wider text-[#999]">
          System
        </div>

        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-[14px] text-[#444] transition-colors hover:bg-[#eeeeee]"
        >
          <Settings
            size={18}
            strokeWidth={1.7}
          />

          Settings
        </button>

      </div>

      {/* User Profile */}
      <div className="border-t p-3">

        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-md p-2 transition-colors hover:bg-[#eeeeee]"
        >

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e5e7eb] text-sm font-medium">
            Y
          </div>

          <div className="min-w-0 flex-1 text-left">

            <p className="truncate text-[13px] font-medium">
              Yash Kalsariya
            </p>

            <p className="truncate text-[12px] text-[#888]">
              Administrator
            </p>

          </div>

          <ChevronRight
            size={16}
            className="shrink-0 text-[#999]"
          />

        </button>

      </div>

    </aside>
  );
}