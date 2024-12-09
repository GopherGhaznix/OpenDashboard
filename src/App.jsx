import React, { useState } from 'react';
import Sidebar from './layout/sidebar';
import { Outlet } from 'react-router-dom';

function App() {

    return (
        <div style={{ background: "#1c1c28" }} className="flex h-screen backdrop-blur-sm bg-slate-950/90 ">

            <Sidebar />

            <main className="flex-1 p-6 text-white">
                <Outlet />
            </main>
        </div>
    );
}

export default App;