import React, { Component } from "react";
import { Form, Input,  Radio, Button, Icon, Card, Checkbox } from "antd";
import login from './login.png'
import loginImage from './loginImage.jpg'

const imgStle = {
  backgroundImage: `url(${loginImage})`,
  backgroundRepeat: "repeat",
  backgroundSize: "auto",
  flex: 3
}

class Login extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="grid-2 p-2">
        <div  style={imgStle}>
             
        </div>
        <div style={{flex: 1}}>
        <Card className="login-card"   cover={
            <img alt="User Login" src={login} />
        }>
          
          <Form className="login-form">
            <div align="center">
          <Form.Item>
          <Radio.Group defaultValue="Student" width="100%">
              <Radio.Button value="Student">Student</Radio.Button>
              <Radio.Button value="Company">Company</Radio.Button>
              <Radio.Button value="Admin">Admin</Radio.Button>
            </Radio.Group>
          </Form.Item>

            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please enter a valid username!" }
                ]
              })(
                <Input
                  name="username"
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [{ required: true, message: "Invalid password!" }]
              })(
                <Input
                  name="password"
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Password"
                />
              )}
            </Form.Item>
            </div>
            <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="#">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="#">register now!</a>
        </Form.Item>
          </Form>
        </Card>
        </div>
      </div>
    );
  }
}

const WrappedLogin = Form.create({ name: "login" })(Login);

export default WrappedLogin;
