import DashboardSidebar from "@/pages/dashboard/Sidebar/page"
import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"

const Layout = () => {
  return (
    <div className="flex">
      <Toaster />
        <DashboardSidebar />
        <div className="flex-1 p-6">
        <Outlet />
        </div>
    </div>
  )
}

export default Layout