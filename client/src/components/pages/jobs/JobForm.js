import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  Card
} from "antd";

const { TextArea } = Input;

class JobForm extends Component {
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Card title="Job Entry" className='login-card'>
            <Form>
                <Form.Item
              label={
                <span>
                  Job Title
                </span>
              }
            >
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input job title!', whitespace: true }],
              })(<Input name='title' />)}
            </Form.Item>

            <Form.Item
              label={
                <span>
                  Description
                </span>
              }
            >
              {getFieldDecorator('description', {
                rules: [{ required: true, message: "Please describe job!", whitespace: true }],
              })(<TextArea name='description' rows={4} />)}
            </Form.Item>

            <Form.Item
              label={
                <span>
                  Requirements
                </span>
              }
            >
              {getFieldDecorator('requirement', {
                rules: [{ required: true, message: "Please enter requirements!", whitespace: true }],
              })(<TextArea name='requirement' rows={4} />)}
            </Form.Item>


            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
          </Card>
        );
    }
};

const WrapJobForm = Form.create({ name: "jobForm" })(JobForm);

export default WrapJobForm;