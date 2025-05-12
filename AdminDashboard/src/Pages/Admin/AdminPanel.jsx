import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";



const AdminPanel = () => {
    return(
   
    
     <div className="admin-panel">
        Admin
        <Sidebar/>
        <Outlet/>
    </div>
    
   
    )
}

export default AdminPanel;  