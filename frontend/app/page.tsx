"use client";

import {
  Bell,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Users,
  CalendarDays,
  Wallet,
  BarChart3,
  Building2,
  BriefcaseBusiness,
  UserRoundCheck,
  Clock3,
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
    children: ["All Employees", "Departments", "Designations"],
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

const employees = [
  {
    name: "Aarav Patel",
    department: "Engineering",
    designation: "Senior Developer",
    status: "Present",
  },
  {
    name: "Priya Shah",
    department: "Human Resources",
    designation: "HR Manager",
    status: "Present",
  },
  {
    name: "Rahul Mehta",
    department: "Finance",
    designation: "Accountant",
    status: "On Leave",
  },
  {
    name: "Neha Joshi",
    department: "Marketing",
    designation: "Marketing Executive",
    status: "Present",
  },
];

export default function Home() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#171717]">

      {/* Sidebar */}
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
              const hasChildren = item.children?.length;

              return (
                <div key={item.title}>

                  <button
                    onClick={() =>
                      hasChildren
                        ? setOpenMenu(
                            openMenu === item.title ? null : item.title
                          )
                        : null
                    }
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-[14px] transition-colors ${
                      item.title === "Dashboard"
                        ? "bg-[#eeeeee] font-medium"
                        : "text-[#444] hover:bg-[#eeeeee]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={18} strokeWidth={1.7} />
                      {item.title}
                    </span>

                    {hasChildren && (
                      <ChevronDown
                        size={15}
                        className={`transition-transform ${
                          openMenu === item.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {hasChildren && openMenu === item.title && (
                    <div className="ml-9 mt-1 space-y-1">
                      {item.children?.map((child) => (
                        <button
                          key={child}
                          className="flex w-full items-center rounded-md px-3 py-2 text-left text-[13px] text-[#666] hover:bg-[#eeeeee] hover:text-black"
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

          <div className="my-5 border-t" />

          <div className="mb-2 px-3 text-[11px] font-medium uppercase tracking-wider text-[#999]">
            System
          </div>

          <button className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-[14px] text-[#444] hover:bg-[#eeeeee]">
            <Settings size={18} strokeWidth={1.7} />
            Settings
          </button>

        </div>

        {/* User */}
        <div className="border-t p-3">

          <button className="flex w-full items-center gap-3 rounded-md p-2 hover:bg-[#eeeeee]">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5e7eb] text-sm font-medium">
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

            <ChevronRight size={16} className="text-[#999]" />

          </button>

        </div>
      </aside>

      {/* Main Area */}
      <main className="ml-[252px] min-h-screen">

        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-[64px] items-center justify-between border-b bg-white px-6">

          <div className="flex items-center gap-2 text-[14px]">

            <span className="text-[#777]">
              HRMS
            </span>

            <ChevronRight
              size={15}
              className="text-[#aaa]"
            />

            <span className="font-medium">
              Dashboard
            </span>

          </div>

          <div className="flex items-center gap-5">

            <button className="relative text-[#555] hover:text-black">
              <Bell size={19} strokeWidth={1.7} />

              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="h-5 w-px bg-[#e5e5e5]" />

            <button className="flex items-center gap-2">

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8e8e8] text-xs font-medium">
                Y
              </div>

              <span className="text-[13px] font-medium">
                Yash
              </span>

              <ChevronDown size={14} />

            </button>

          </div>

        </header>

        {/* Content */}
        <section className="px-8 py-8">

          {/* Welcome */}
          <div className="mb-8">

            <h1 className="text-[28px] font-semibold tracking-tight">
              Good morning, Yash 👋
            </h1>

            <p className="mt-1 text-[14px] text-[#777]">
              Here's what's happening with your organization today.
            </p>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">

            <StatCard
              title="Total Employees"
              value="248"
              subtitle="+12 this month"
              icon={<Users size={20} />}
            />

            <StatCard
              title="Present Today"
              value="214"
              subtitle="86.3% attendance"
              icon={<UserRoundCheck size={20} />}
            />

            <StatCard
              title="On Leave"
              value="12"
              subtitle="3 pending requests"
              icon={<CalendarDays size={20} />}
            />

            <StatCard
              title="Departments"
              value="8"
              subtitle="Across organization"
              icon={<Building2 size={20} />}
            />

          </div>

          {/* Charts / Requests */}
          <div className="mt-6 grid grid-cols-[1.6fr_1fr] gap-5">

            {/* Attendance */}
            <div className="rounded-lg border bg-white">

              <div className="flex items-center justify-between border-b px-5 py-4">

                <div>
                  <h2 className="text-[15px] font-semibold">
                    Attendance Overview
                  </h2>

                  <p className="mt-1 text-xs text-[#888]">
                    Attendance for the current week
                  </p>
                </div>

                <button className="flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs hover:bg-[#f5f5f5]">
                  This Week
                  <ChevronDown size={13} />
                </button>

              </div>

              <div className="p-5">

                <div className="flex h-[230px] items-end gap-5 border-b border-l px-5 pb-0">

                  {[72, 85, 65, 92, 78, 88, 80].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex h-full flex-1 flex-col justify-end"
                      >
                        <div
                          className="rounded-t-md bg-[#1677ff] opacity-90"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    )
                  )}

                </div>

                <div className="mt-3 flex justify-between px-4 text-[11px] text-[#999]">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>

              </div>

            </div>

            {/* Leave Requests */}
            <div className="rounded-lg border bg-white">

              <div className="flex items-center justify-between border-b px-5 py-4">

                <div>
                  <h2 className="text-[15px] font-semibold">
                    Leave Requests
                  </h2>

                  <p className="mt-1 text-xs text-[#888]">
                    Recent leave applications
                  </p>
                </div>

                <button className="text-xs font-medium text-[#1677ff] hover:underline">
                  View all
                </button>

              </div>

              <div className="divide-y">

                <LeaveRequest
                  name="Rahul Mehta"
                  type="Casual Leave"
                  date="Sep 28 - Sep 30"
                  status="Pending"
                />

                <LeaveRequest
                  name="Anjali Shah"
                  type="Sick Leave"
                  date="Sep 29"
                  status="Approved"
                />

                <LeaveRequest
                  name="Vivek Patel"
                  type="Annual Leave"
                  date="Oct 2 - Oct 5"
                  status="Pending"
                />

              </div>

            </div>

          </div>

          {/* Employees */}
          <div className="mt-6 rounded-lg border bg-white">

            <div className="flex items-center justify-between border-b px-5 py-4">

              <div>
                <h2 className="text-[15px] font-semibold">
                  Recent Employees
                </h2>

                <p className="mt-1 text-xs text-[#888]">
                  Recently added employees
                </p>
              </div>

              <button className="text-xs font-medium text-[#1677ff] hover:underline">
                View all employees
              </button>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead className="bg-[#fafafa] text-xs text-[#777]">

                  <tr>
                    <th className="px-5 py-3 font-medium">
                      Employee
                    </th>

                    <th className="px-5 py-3 font-medium">
                      Department
                    </th>

                    <th className="px-5 py-3 font-medium">
                      Designation
                    </th>

                    <th className="px-5 py-3 font-medium">
                      Status
                    </th>
                  </tr>

                </thead>

                <tbody className="divide-y">

                  {employees.map((employee) => (
                    <tr
                      key={employee.name}
                      className="text-[13px] hover:bg-[#fafafa]"
                    >

                      <td className="px-5 py-4">

                        <div className="flex items-center gap-3">

                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eeeeee] text-xs font-medium">
                            {employee.name.charAt(0)}
                          </div>

                          <span className="font-medium">
                            {employee.name}
                          </span>

                        </div>

                      </td>

                      <td className="px-5 py-4 text-[#666]">
                        {employee.department}
                      </td>

                      <td className="px-5 py-4 text-[#666]">
                        {employee.designation}
                      </td>

                      <td className="px-5 py-4">

                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                            employee.status === "Present"
                              ? "bg-green-50 text-green-700"
                              : "bg-orange-50 text-orange-700"
                          }`}
                        >
                          {employee.status}
                        </span>

                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

/* ---------------- Components ---------------- */

function StatCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border bg-white p-5">

      <div className="flex items-center justify-between">

        <p className="text-[13px] text-[#777]">
          {title}
        </p>

        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#f1f5f9] text-[#555]">
          {icon}
        </div>

      </div>

      <div className="mt-4">

        <p className="text-[27px] font-semibold tracking-tight">
          {value}
        </p>

        <p className="mt-1 text-[11px] text-[#888]">
          {subtitle}
        </p>

      </div>

    </div>
  );
}

function LeaveRequest({
  name,
  type,
  date,
  status,
}: {
  name: string;
  type: string;
  date: string;
  status: "Pending" | "Approved";
}) {
  return (
    <div className="flex items-center justify-between px-5 py-4">

      <div className="flex items-center gap-3">

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eeeeee] text-xs font-medium">
          {name.charAt(0)}
        </div>

        <div>
          <p className="text-[13px] font-medium">
            {name}
          </p>

          <p className="mt-0.5 text-[11px] text-[#888]">
            {type} · {date}
          </p>
        </div>

      </div>

      <span
        className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
          status === "Approved"
            ? "bg-green-50 text-green-700"
            : "bg-yellow-50 text-yellow-700"
        }`}
      >
        {status}
      </span>

    </div>
  );
}