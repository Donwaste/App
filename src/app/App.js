import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Main from "./layouts/main";
import LoginPage from "./layouts/login";
import Users from "./layouts/users";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/users/:userId?" element={<Users />} />
                <Route path="/" element={<Main />} />
            </Routes>
        </>
    );
}

export default App;
