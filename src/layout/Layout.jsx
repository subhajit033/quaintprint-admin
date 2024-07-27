import DashboardSidebar from "@/pages/dashboard/Sidebar/page"
import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <div className="flex">
        <DashboardSidebar />
        <div className="flex-1 p-6">
        <Outlet />
        </div>
    </div>
  )
}

export default Layout