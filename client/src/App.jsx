import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="app" element={<Layout />}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="builder/:resumeId" element={<ResumeBuilder/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;
