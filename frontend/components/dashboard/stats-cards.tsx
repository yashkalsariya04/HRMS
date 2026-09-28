import {
  CalendarDays,
  Building2,
  UserRoundCheck,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Total Employees",
    value: "248",
    subtitle: "+12 this month",
    icon: Users,
  },
  {
    title: "Present Today",
    value: "214",
    subtitle: "86.3% attendance",
    icon: UserRoundCheck,
  },
  {
    title: "On Leave",
    value: "12",
    subtitle: "3 pending requests",
    icon: CalendarDays,
  },
  {
    title: "Departments",
    value: "8",
    subtitle: "Across organization",
    icon: Building2,
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-lg border bg-white p-5 transition-shadow hover:shadow-sm"
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <p className="text-[13px] text-[#777]">
                {stat.title}
              </p>

              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#f1f5f9] text-[#555]">
                <Icon
                  size={20}
                  strokeWidth={1.7}
                />
              </div>
            </div>

            {/* Value */}
            <div className="mt-4">
              <p className="text-[27px] font-semibold tracking-tight">
                {stat.value}
              </p>

              <p className="mt-1 text-[11px] text-[#888]">
                {stat.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}