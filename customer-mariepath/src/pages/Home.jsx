import React from "react";
import { Button, Card } from "antd";
import { Box, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Card style={{ width: 400, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>🎉 Chào mừng bạn đến MarinePath!</Typography>
        <Button type="primary" onClick={handleLogout}>Đăng xuất</Button>
      </Card>
    </Box>
  );
}
