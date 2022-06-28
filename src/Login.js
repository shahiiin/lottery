import React, {useState} from 'react';
import {Form, Input, Button, Checkbox, Card} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

function Login (props) {
  const [username, setUserName] = useState ();
  const [password, setPassword] = useState ();
  const [repassword, setRepassword] = useState ();
  const [rememberMe, setRememberMe] = useState ();
  const userNamechange = e => {
    setUserName (e.target.value);
    console.log (e.target.value, 'username changed');
  };
  // this.useState = {
  //   users: [],
  // };
  const passwordchange = e => {
    console.log (e.target.value, 'password changed');
    setPassword (e.target.value);
  };
  const RepasswordChange = e => {
    console.log (e.target.value, 'Repassword changed');
    setRepassword (e.target.value);
  };
  const rememberMechange = e => {
    console.log (e.target.value, 'remember me changed');
    setRememberMe (e.target.value);
  };
  const handleSubmit = () => {
    fetch (
      'https://5ec3ae46628c160016e70795.mockapi.io/lattaryliararun/posts'
    ).then (response => {
      const get = response.json ();
    });
  };

  return (
    <Card className="log-form-card">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{remember: true}}
      >
        <Form.Item
          name="username"
          rules={[{required: true, message: 'Please input your Username!'}]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            onChange={e => userNamechange (e)}
            placeholder="username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{required: true, message: 'Please input your Password!'}]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            onChange={e => passwordchange (e)}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="Re-password"
          rules={[{required: true, message: 'Please input your Re-Password!'}]}
          onChange={e => RepasswordChange (e)}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Re-Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item
            onChange={e => rememberMechange (e)}
            name="remember"
            valuePropName="checked"
            noStyle
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={e => handleSubmit (e)}
          >
            Login
          </Button>

        </Form.Item>
      </Form>
    </Card>
  );
}

export default Login;
