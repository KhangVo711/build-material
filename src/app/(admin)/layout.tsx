import HeaderAdmin from "./@headerAdmin/page";
import SideBarAdmin from "./@sideBarAdmin/page";
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex w-full justify-between h-screen">
            <div className="w-1/5">
                <SideBarAdmin />
            </div>
            <div className="w-4/5 relative ">
                <HeaderAdmin />
                {children}
            </div>
        </div>
    )
}