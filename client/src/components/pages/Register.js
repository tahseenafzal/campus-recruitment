import React, { Component } from "react";
import {
  Form,
  Input,
  Radio,
  Button,
  Card
} from "antd";

class Register extends Component {
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Card title="User Register" className='login-card'>
            <Form>
                <Form.Item
              label={
                <span>
                  Name
                </span>
              }
            >
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
              })(<Input name='username' />)}
            </Form.Item>
            <Form.Item label="E-mail">
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ],
              })(<Input name='email' />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password name='password' />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(<Input.Password onBlur={this.handleConfirmBlur} />)}
            </Form.Item>
            <div align="center">
            <Form.Item>
          <Radio.Group defaultValue="Student" width="100%">
              <Radio.Button value="Student">Student</Radio.Button>
              <Radio.Button value="Company">Company</Radio.Button>
              <Radio.Button value="Admin">Admin</Radio.Button>
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
    }
};

const WrapRegister = Form.create({ name: "register" })(Register);

export default WrapRegister;