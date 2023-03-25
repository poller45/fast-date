import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import App from "./app/App";
import Login from "./app/layouts/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./app/layouts/Users";
import Main from "./app/layouts/main";
import UsersListPage from "./app/components/page/usersListPage";
//import RegisterForm from "./app/components/ui/RegisterForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            //    {
            //       path: "register",
            //       element: <RegisterForm />
            //   },
            {
                path: "users",
                element: <UsersListPage />
            },
            {
                path: "/",
                element: <Main />
            },
            {
                path: "users/:userId",
                element: <Users />
            }
        ]
    }
]);
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
