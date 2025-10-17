import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Home from "../src/pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
