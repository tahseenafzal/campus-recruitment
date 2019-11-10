import React, { Component } from "react";
import {
  Form,
  Input,
  Radio,
  Button,
  Card
} from "antd";

class StudentForm extends Component {
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Card title="Student Details">
            <Form className="form-container">
                <Form.Item
              label={
                <span>
                  First Name
                </span>
              }
            >
              {getFieldDecorator('firstname', {
                rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
              })(<Input name='firstname' />)}
            </Form.Item>

            <Form.Item
              label={
                <span>
                  Last Name
                </span>
              }
            >
              {getFieldDecorator('lastname', {
                rules: [{ whitespace: true }],
              })(<Input name='lastname' />)}
            </Form.Item>

            <Form.Item
              label={
                <span>
                  Address
                </span>
              }
            >
              {getFieldDecorator('address', {
                rules: [{ required: true, message: 'Please input your address!', whitespace: true }],
              })(<Input name='address' />)}
            </Form.Item>

            <Form.Item
              label={
                <span>
                  Qualification
                </span>
              }
            >
              {getFieldDecorator('qualification', {
                rules: [{ required: true, message: 'Please input your qualification!', whitespace: true }],
              })(<Input name='qualification' />)}
            </Form.Item>
            
            <Form.Item
             label={
                 <span>
                     Other Skills
                 </span>
             }
             >
                 {getFieldDecorator('skills', {
                     rules: [ { required:true, message: "Please input your ohter skills you have!", whitespace: true}],
                 })(<Input name='skills' />)}
             </Form.Item>
             <Form.Item
             label={
                 <span>
                     Hobies
                 </span>
             }
             >
                 {getFieldDecorator('hobies', {
                     rules: [ { required:true, message: "Please input your hobies you have!", whitespace: true}],
                 })(<Input name='hobies' />)}
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

            <Form.Item
              label={
                <span>
                  Mobile
                </span>
              }
            >
              {getFieldDecorator('mobile', {
                rules: [{ required: true, message: 'Please input your mobile number!', whitespace: true }],
              })(<Input name='mobile' />)}
            </Form.Item>


            <Form.Item
              label={
                <span>
                  Home Contact
                </span>
              }
            >
              {getFieldDecorator('home', {
                rules: [{  whitespace: true }],
              })(<Input name='home' />)}
            </Form.Item>

            <div align="center">
          <Form.Item>
          <Radio.Group defaultValue="Student" width="100%">
              <Radio.Button value="Male">Male</Radio.Button>
              <Radio.Button value="Female">Female</Radio.Button>
            </Radio.Group>
          </Form.Item>
          </div>


            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save Details
              </Button>
            </Form.Item>
          </Form>
          </Card>
        );
    }
};

const WrapStudentForm = Form.create({ name: "studentForm" })(StudentForm);

export default WrapStudentForm;