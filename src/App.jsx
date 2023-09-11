import React from "react";
import DetailUser from "./pages/DetailUser";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import { useRoutes } from "react-router";
import ProtectedRoutes from "./routes/ProtectedRoutes";


const routes = [
  { path: "/", element: <Login /> },
  {
    path: "/:id",
    element: (
      <ProtectedRoutes>
        <DetailUser />
      </ProtectedRoutes>
    ),
  },
  { path: "/register", element: <Register /> },
  {
    path: "/userlist",
    element: (
      <ProtectedRoutes>
        <UserList />
      </ProtectedRoutes>
    ),
  },
];

const App = () => {
  const element = useRoutes(routes);

  return element;
};

export default App;
