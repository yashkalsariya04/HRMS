import { ChevronRight } from "lucide-react";

const leaveRequests = [
  {
    name: "Rahul Mehta",
    type: "Casual Leave",
    date: "Sep 28 - Sep 30",
    status: "Pending",
  },
  {
    name: "Anjali Shah",
    type: "Sick Leave",
    date: "Sep 29",
    status: "Approved",
  },
  {
    name: "Vivek Patel",
    type: "Annual Leave",
    date: "Oct 2 - Oct 5",
    status: "Pending",
  },
];

export function LeaveRequests() {
  return (
    <div className="rounded-lg border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div>
          <h2 className="text-[15px] font-semibold">
            Leave Requests
          </h2>

          <p className="mt-1 text-xs text-[#888]">
            Recent leave applications
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-xs font-medium text-[#1677ff] hover:underline"
        >
          View all
          <ChevronRight size={13} />
        </button>
      </div>

      {/* Requests */}
      <div className="divide-y">
        {leaveRequests.map((request) => (
          <div
            key={`${request.name}-${request.date}`}
            className="flex items-center justify-between px-5 py-4"
          >
            {/* Employee */}
            <div className="flex min-w-0 items-center gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eeeeee] text-xs font-medium">
                {request.name.charAt(0)}
              </div>

              <div className="min-w-0">
                <p className="truncate text-[13px] font-medium">
                  {request.name}
                </p>

                <p className="mt-0.5 truncate text-[11px] text-[#888]">
                  {request.type} · {request.date}
                </p>
              </div>

            </div>

            {/* Status */}
            <span
              className={`ml-3 shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium ${
                request.status === "Approved"
                  ? "bg-green-50 text-green-700"
                  : "bg-yellow-50 text-yellow-700"
              }`}
            >
              {request.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}