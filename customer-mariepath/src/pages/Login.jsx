import React from "react";
import { Button, Checkbox, Input, Typography } from "antd";
import { GoogleOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f0f2f5">
      <div className="login-container">
        <div className="login-form">
          <Typography className="logo">TheCubeFactory</Typography>
          <Typography className="welcome-text">Welcome back</Typography>
          <Typography className="sub-text">Please enter your details</Typography>
          <Input prefix={<UserOutlined />} placeholder="Email address" className="input-field" />
          <Input.Password prefix={<LockOutlined />} placeholder="Password" className="input-field" />
          <div className="options">
            <Checkbox>Remember for 30 days</Checkbox>
            <a href="/forgot-password">Forgot password</a>
          </div>
          <Button type="primary" block className="sign-in-btn">Sign in</Button>
         
          <Button icon={<GoogleOutlined />} onClick={handleGoogleLogin} block className="google-btn">
            Sign in with Google
          </Button>
          <Typography className="signup-text">
            Don't have an account? <Link to="/register">Sign up</Link>
          </Typography>
        </div>
        <div className="login-illustration"></div>
      </div>
    </Box>
  );
}