import React from "react";
import { Layout, Form, Input, Button, Typography, DatePicker, Select, Divider, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import image1 from "../../../assets/images.jpg"; // Đảm bảo đường dẫn ảnh đúng
import "./register.css";

const { Title, Text, Link } = Typography;
const { Content } = Layout;
const { Option } = Select;

const Register = () => {
  return (
    <Layout className="register-layout">
      <Content
        className="register-left"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="register-overlay" />
    
      </Content>

      <Content className="register-right">
        <div className="register-form-container">
          <div style={{ textAlign: "center" }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3771/3771541.png"
              alt="logo"
              className="register-logo"
            />
          </div>

          <Title level={2} className="register-title">
            Đăng ký tài khoản
          </Title>

          <Form layout="vertical" name="registerForm">
            <Form.Item label="Họ và tên" name="fullName">
              <Input placeholder="Họ tên đầy đủ" />
            </Form.Item>

            <Form.Item label="Email" name="email">
              <Input placeholder="example@gmail.com" />
            </Form.Item>

            <Form.Item label="Mật khẩu" name="password">
              <Input.Password placeholder="******" />
            </Form.Item>

            <Form.Item label="Số điện thoại" name="phone">
              <Input placeholder="(+84)" />
            </Form.Item>

            <Form.Item label="Giới tính" name="gender">
              <Select placeholder="Chọn giới tính">
                <Option value="Nam">Nam</Option>
                <Option value="Nữ">Nữ</Option>
             
              </Select>
            </Form.Item>

            <Form.Item label="Ngày sinh" name="dob">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

           

            <Form.Item>
              <Button
                type="primary"
                htmlType="button" // Thay submit bằng button để chỉ là UI
                block
                className="register-button"
              >
                Đăng ký
              </Button>
            </Form.Item>

            <Text style={{ display: "block", textAlign: "center" }}>
              Đã có tài khoản?{" "}
              <Link href="/" style={{ color: "#c2185b" }}>
                Đăng nhập ngay
              </Link>
            </Text>

            <Divider style={{ borderColor: "#f0f0f0" }}>hoặc</Divider>

            <Space direction="vertical" style={{ width: "100%" }}>
              <Button block disabled>
                Đăng ký với Google
              </Button>
            
            </Space>
          </Form>

          <Text className="register-footer">
            © 2025 Desiki Care. Đã đăng ký bản quyền.
          </Text>
        </div>
      </Content>
    </Layout>
  );
};

export default Register;