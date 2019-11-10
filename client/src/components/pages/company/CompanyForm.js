import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  Card
} from "antd";

class CompanyForm extends Component {
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Card title="Company Details" className='form-container'>
            <Form>
                <Form.Item
              label={
                <span>
                  Name
                </span>
              }
            >
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your company name!', whitespace: true }],
              })(<Input name='name' />)}
            </Form.Item>

            <Form.Item
              label={
                <span>
                  Address
                </span>
              }
            >
              {getFieldDecorator('address', {
                rules: [{ required: true, message: 'Please input your company address!', whitespace: true }],
              })(<Input name='address' />)}
            </Form.Item>
            
            <Form.Item
              label={
                <span>
                  Conatct Person
                </span>
              }
            >
              {getFieldDecorator('person', {
                rules: [{ required: true, message: 'Please input your contact person name!', whitespace: true }],
              })(<Input name='person' />)}
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
                  Phone
                </span>
              }
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input company contact number!', whitespace: true }],
              })(<Input name='phone' />)}
            </Form.Item>

            <Form.Item
              label={
                <span>
                  Fax
                </span>
              }
            >
              {getFieldDecorator('fax', {
                rules: [{ whitespace: true }],
              })(<Input name='fax' />)}
            </Form.Item>

            <Form.Item
              label={
                <span>
                  Website
                </span>
              }
            >
              {getFieldDecorator('url', {
                rules: [{ whitespace: true }],
              })(<Input name='url' />)}
            </Form.Item>

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

const WrapCompanyForm = Form.create({ name: "companyform" })(CompanyForm);

export default WrapCompanyForm;