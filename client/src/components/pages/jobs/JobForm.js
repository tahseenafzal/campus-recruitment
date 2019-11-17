import React, { Component } from "react";
import { Form, Input, Button, Card, message } from "antd";
import { addJob } from "../../../Store/Actions/JobActions";
import { connect } from "react-redux";

const { TextArea } = Input;

class JobForm extends Component {

  onSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const { title, description, requirement } = values;
      if (!err) {
        if (title === "" || requirement === "") {
          message.error("Please enter username and password");
        } else {
          
            const newJob = {
             title,
             description,
             requirement
              // usertype: this.state.usertype
            }
            
            this.props.addJob(newJob);
            // console.log('error message', this.props);
            // message.info(this.props.errMessage);     
        }
      }
    });
  };


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card title="Job Entry" className="login-card">
        <Form onSubmit={this.onSubmit}>
          <Form.Item label={<span>Job Title</span>}>
            {getFieldDecorator("title", {
              rules: [
                {
                  required: true,
                  message: "Please input job title!",
                  whitespace: true
                }
              ]
            })(<Input name="title" />)}
          </Form.Item>

          <Form.Item label={<span>Description</span>}>
            {getFieldDecorator("description", {
              rules: [
                {
                  required: true,
                  message: "Please describe job!",
                  whitespace: true
                }
              ]
            })(<TextArea name="description" rows={4} />)}
          </Form.Item>

          <Form.Item label={<span>Requirements</span>}>
            {getFieldDecorator("requirement", {
              rules: [
                {
                  required: true,
                  message: "Please enter requirements!",
                  whitespace: true
                }
              ]
            })(<TextArea name="requirement" rows={4} />)}
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
}

const mapDispatchToProps = dispatch => {
  return {
    addJob: data => dispatch(addJob(data))
  }
}

const WrapJobForm = Form.create({ name: "jobForm" })(JobForm);

export default connect(null, mapDispatchToProps)(WrapJobForm);
