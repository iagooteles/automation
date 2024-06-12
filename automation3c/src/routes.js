import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login';
import Registry from "./pages/Registry";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/registry" element={<Registry/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;