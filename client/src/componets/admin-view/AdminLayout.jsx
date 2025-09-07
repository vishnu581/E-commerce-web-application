
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
const AdminLayout = () => {
  return (
   <div className="flex min-h-screen w-full">
      <Sidebar/>
    <div className="flex flex-1 bg-muted/40">
       <Header/>
    <main className=" flex-1 flex bg-muted/40 p-4 md:p-6">
        <Outlet/>
    </main>

    </div>
   </div>

  )
}

export default AdminLayout