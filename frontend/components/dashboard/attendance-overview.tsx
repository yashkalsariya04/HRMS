import { ChevronDown } from "lucide-react";

const attendanceData = [
  { day: "Mon", value: 72 },
  { day: "Tue", value: 85 },
  { day: "Wed", value: 65 },
  { day: "Thu", value: 92 },
  { day: "Fri", value: 78 },
  { day: "Sat", value: 88 },
  { day: "Sun", value: 80 },
];

export function AttendanceOverview() {
  return (
    <div className="rounded-lg border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div>
          <h2 className="text-[15px] font-semibold">
            Attendance Overview
          </h2>

          <p className="mt-1 text-xs text-[#888]">
            Attendance for the current week
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs text-[#555] transition-colors hover:bg-[#f5f5f5]"
        >
          This Week
          <ChevronDown size={13} />
        </button>
      </div>

      {/* Chart */}
      <div className="p-5">
        <div className="flex h-[230px] items-end gap-4 border-b border-l px-5">
          {attendanceData.map((item) => (
            <div
              key={item.day}
              className="flex h-full flex-1 flex-col justify-end"
            >
              <div className="group relative flex h-full items-end">
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 rounded-md bg-[#171717] px-2 py-1 text-[10px] text-white group-hover:block">
                  {item.value}%
                </div>

                {/* Bar */}
                <div
                  className="w-full rounded-t-md bg-[#1677ff] transition-all hover:bg-[#0f63d8]"
                  style={{
                    height: `${item.value}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="mt-3 flex justify-between px-4 text-[11px] text-[#999]">
          {attendanceData.map((item) => (
            <span key={item.day}>
              {item.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}