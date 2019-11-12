import React, { useState } from "react";
import { connect } from "react-redux";
import { addUser } from "../../Store/Actions/UserActions";

import { Form, Input, Radio, Button, Card, message } from "antd";

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUserType] = useState('');

  const { getFieldDecorator } = this.props.form;

  const onSubmit = () => {
    if (username === '' || password === '') {
      message.error('Please enter username and password');
    } else {
      const newUser = {
        username,
        email,
        password,
        usertype,
        date: new Date()
      };

      addUser(newUser);

      message.info('User registered successfully');

      // Clear Fields
      setUsername('');
      setEmail('');
      setPassword('');
      setUserType('');
    }
  };

  return (
    <Card title="User Register" className="login-card">
      <Form onSubmit={onSubmit}>
        <Form.Item label={<span>Name</span>}>
          {getFieldDecorator("username", {
            rules: [
              {
                required: true,
                message: "Please input your username!",
                whitespace: true
              }
            ]
          })(<Input name="username" value={username} onChange={e => setUsername(e.target.value)} />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input name="email" value={email} onChange={e => setEmail(e.target.value)} />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input.Password name="password" value={password} onChange={e => setPassword(e.target.value)} />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <div align="center">
          <Form.Item>
            <Radio.Group name="usertype" defaultValue="Student" width="100%">
              <Radio.Button value="Student" onChange={e => setUsername(e.target.value)}>Student</Radio.Button>
              <Radio.Button value="Company" onChange={e => setUsername(e.target.value)}>Company</Radio.Button>
              <Radio.Button value="Admin" onChange={e => setUsername(e.target.value)}>Admin</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Card>
  );
};


const WrapRegister = Form.create({ name: "register" })(Register);

export default connect(
  null,
  { addUser }
)(WrapRegister);
