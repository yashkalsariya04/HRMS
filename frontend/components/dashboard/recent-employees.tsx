import { ChevronRight } from "lucide-react";

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

export function RecentEmployees() {
  return (
    <div className="mt-6 rounded-lg border bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div>
          <h2 className="text-[15px] font-semibold">
            Recent Employees
          </h2>

          <p className="mt-1 text-xs text-[#888]">
            Recently added employees
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-xs font-medium text-[#1677ff] hover:underline"
        >
          View all employees
          <ChevronRight size={13} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left">
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
                className="text-[13px] transition-colors hover:bg-[#fafafa]"
              >
                {/* Employee */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eeeeee] text-xs font-medium">
                      {employee.name.charAt(0)}
                    </div>

                    <span className="font-medium">
                      {employee.name}
                    </span>

                  </div>
                </td>

                {/* Department */}
                <td className="px-5 py-4 text-[#666]">
                  {employee.department}
                </td>

                {/* Designation */}
                <td className="px-5 py-4 text-[#666]">
                  {employee.designation}
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
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
  );
}