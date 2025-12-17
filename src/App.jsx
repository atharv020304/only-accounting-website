import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import ServiceDetails from "./Pages/ServiceDetails";
import "./styles.css";


export default function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/service/:id" element={<ServiceDetails />} />
</Routes>
</Router>
);
}