// import React from 'react'

// function Login() {
//   return (
//     <div>
//         <div>

//         </div>
//     </div>
//   )
// }

// export default Login

// src/Login.js
import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
// import 'antd'; 
import './Header1.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className='login'>
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col span={8}>
        <div className="login-container">
          <h2 className="login-title">Login</h2>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
            className="login-form"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a href="/" className="login-forgot-password">
                Forgot password?
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button">
                Log in
              </Button>
              <p>New User?   <Link to='/registration'>Register Now</Link></p>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
    </div>
  );
};

export default Login;
