import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

export default function RoutesApp({ toggleTheme }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<Login toggleTheme={toggleTheme} />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
