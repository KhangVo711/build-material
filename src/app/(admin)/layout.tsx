import HeaderAdmin from "@/components/admin/headerAdmin/HeaderAdmin";
import SideBar from "@/components/admin/sidebar/SideBar";
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex w-full justify-between h-screen">
            <div className="w-1/5">
                <SideBar />
            </div>
            <div className="w-5/6">
                <HeaderAdmin />
                {children}
            </div>
        </div>
    )
}