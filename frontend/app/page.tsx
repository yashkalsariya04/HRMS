import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { LeaveRequests } from "@/components/dashboard/leave-requests";
import { WelcomeSection } from "@/components/dashboard/welcome-section";
import { RecentEmployees } from "@/components/dashboard/recent-employees";
import { AttendanceOverview } from "@/components/dashboard/attendance-overview";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />

      <main className="ml-[252px] min-h-screen">
        <Header />

        <section className="px-8 py-8">
          <WelcomeSection />
          <StatsCards />

            {/* Attendance + Leave */}
          <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[1.6fr_1fr]">
            <AttendanceOverview />

            <LeaveRequests />
          </div>

          <RecentEmployees />

        </section>
      </main>
    </div>
  );
}