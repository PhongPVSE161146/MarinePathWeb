import React from "react";
import { Button, Checkbox, Input, Typography } from "antd";
import { UserOutlined, LockOutlined, MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
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
    <div className="login-container">
      <div className="login-form">
        <Typography className="logo">TheCubeFactory</Typography>
        <Typography className="welcome-text">Create account</Typography>
        <Typography className="sub-text">Please enter your details</Typography>
        <Input prefix={<MailOutlined />} placeholder="Email address" className="input-field" />
        <Input.Password prefix={<LockOutlined />} placeholder="Password" className="input-field" />
        <Input.Password prefix={<LockOutlined />} placeholder="Confirm password" className="input-field" />
     
        <Button type="primary" block className="sign-in-btn">Register</Button>
        <Button icon={<GoogleOutlined />} onClick={handleGoogleLogin} block className="google-btn">
          Sign in with Google
        </Button>
        <Typography className="signup-text">
          Already have an account? <Link to="/login">Sign in</Link>
        </Typography>
      </div>
      <div className="login-illustration"></div>
    </div>
  );
}