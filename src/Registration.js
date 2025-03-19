// import React from 'react'
// import { Button, Checkbox, Form, Input } from 'antd'
// import FormItem from 'antd/es/form/FormItem'
// import Password from 'antd/es/input/Password'

// const Registration = () => {
//   const onFinish = (values) => {

//   }
//   return (
//     <div className='registration_container'>

//       <h1 className='registration_title'>Registration Form</h1>
//       <Form
//         name="registration"
//         initialValues={{ remenber: true }}
//         onFinish={onFinish}
//         layout='vertical'
//         className='registration_form'
//       >
//         <FormItem
//           label="UserName"
//           name="UserName"

//         >
//           <Input />
//         </FormItem>
//         <FormItem
//           label="EMail"
//           name="Email"
//         >
//           <Input />
//         </FormItem>

//         <FormItem
//           label="Password"
//           name="Password"
//         >
//           <Input.Password />
//         </FormItem>

//         <FormItem
//           label="Confirm Password"
//           name="Confirm Password"
//           dependencies={["Password"]}
//           rules={[
//             { required: 'true', message: 'Please confirm your password !' }, ({ getFieldValue }) => ({
//               validator(_, value) {
//                 if (!value || getFieldValue('password') === value) {
//                   return Promise.resolve();
//                 }
//                 return Promise.reject('The two passwords do not match!');
//               },
//             }),
//           ]}
//         >
//           <Input.Password />
//         </FormItem>
//         <FormItem name="Remember" valuePropName='checked'className='register_remenber'>
//           <Checkbox>Remenber Me</Checkbox>
//         </FormItem>

//         <FormItem>
//         <a href="/" className='forget_password_link'>
//           Forgot Password
//         </a>
//         </FormItem>

//         <FormItem>
//           <Button type='primary'htmlType='submit'className='registraton_button'>
//             Register Now
//           </Button>
//         </FormItem>

//       </Form>
//     </div>
//   )
// }

// export default Registration

import React from 'react';
import { Form, Input, Button, Checkbox} from 'antd';
import './Header1.css'  // Import the separate CSS file

// const { Title } = Typography;

const Registration = () => {
  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div className="registration-container">
      {/* <Title level={2} className="form-title">Register</Title> */}
      <h2>Register</h2>

      <Form
        name="registration"
        onFinish={onFinish}
        initialValues={{
          remember: true,
        }}
        className="form"
      >
        {/* Full Name */}
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[{ required: true, message: 'Please enter your full name!' }]}
        >
          <Input placeholder="Enter your full name" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'Please enter a valid email!' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        {/* Password */}
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
          hasFeedback
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        {/* Confirm Password */}
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm your password" />
        </Form.Item>

        {/* Terms and Conditions */}
        <Form.Item name="terms" valuePropName="checked">
          <Checkbox>
            I agree to the <a href="#">terms and conditions</a>
          </Checkbox>
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Registration;
