import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <main>
                <div className="container">
                    <NavBar />
                    <Outlet />
                </div>
            </main>
        </>
    );
}
export default App;
