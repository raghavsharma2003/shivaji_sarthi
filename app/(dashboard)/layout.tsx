import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { MobileNav } from "@/components/layout/MobileNav";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full flex-col overflow-hidden bg-[var(--color-ink)] md:flex-row text-white">
            <Sidebar />
            <div className="flex w-full flex-1 flex-col overflow-hidden md:pl-[220px]">
                <Topbar />
                <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
                    <div className="mx-auto w-full max-w-7xl px-4 py-6 md:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
            <MobileNav />
        </div>
    );
}
