import DashboardHome from "@/components/admin/dashboard/DashBoard";
import HeaderAdmin from "@/components/admin/headerAdmin/HeaderAdmin";
import SideBar from "@/components/admin/sidebar/SideBar";

export default function Page() {
  return (
    <div className="flex w-full justify-between h-screen">
      <div className="w-1/5">
        <SideBar />
      </div>
      <div className="w-5/6">
        <HeaderAdmin />
        <DashboardHome />
      </div>
    </div>
  );
}