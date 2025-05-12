import AdminPanel from "./Pages/Admin/AdminPanel";
import Dashboard from "./Pages/Admin/Dashboard";
import Users from "./Pages/Admin/Users";
import AppLayout from "./Pages/AppLayout";
import Home from "./Pages/Home";







export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Admin-Panel",
        element: <AdminPanel />,
        children: [
          {
            path: "Dashboard",
            element: <Dashboard />,
          },
          {
            path: "Users",
            element: <Users />,
          },
        ]
      }
    ]
  }
];
