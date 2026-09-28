"use client";

import {
  Bell,
  ChevronDown,
  ChevronRight,
  Globe,
} from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-[64px] items-center justify-between border-b bg-white px-6">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[14px]">

        <span className="text-[#777]">
          HRMS
        </span>

        <ChevronRight
          size={15}
          className="text-[#aaa]"
        />

        <span className="font-medium text-[#333]">
          Dashboard
        </span>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        {/* Organization */}
        <button
          type="button"
          className="hidden items-center gap-2 text-[13px] text-[#666] transition-colors hover:text-[#171717] md:flex"
        >
          <Globe size={17} strokeWidth={1.7} />
          India
        </button>

        <div className="h-5 w-px bg-[#e5e5e5]" />

        {/* Notification */}
        <button
          type="button"
          className="relative text-[#555] transition-colors hover:text-[#171717]"
          aria-label="Notifications"
        >
          <Bell
            size={19}
            strokeWidth={1.7}
          />

          {/* Notification Dot */}
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="h-5 w-px bg-[#e5e5e5]" />

        {/* User */}
        <button
          type="button"
          className="flex items-center gap-2"
        >

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e8e8e8] text-xs font-medium">
            Y
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-[13px] font-medium text-[#333]">
              Yash
            </p>

            <p className="text-[11px] text-[#888]">
              Administrator
            </p>
          </div>

          <ChevronDown
            size={14}
            className="text-[#777]"
          />

        </button>

      </div>

    </header>
  );
}