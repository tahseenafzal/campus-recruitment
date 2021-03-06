import React, { Component } from "react";
import { Form, Input, Button, Card, message } from "antd";
import { connect } from "react-redux";
import { addCompany } from "../../../Store/Actions/CompanyActions";

class CompanyForm extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const { name, email, address, person, phone, fax, url } = values;

      if (!err) {
        if (name === "" || email === "" || person === "") {
          message.error("Some of required fields are empty.");
        } else {
          const newCompany = {
            name,
            email,
            address,
            person,
            phone,
            fax,
            url
          };
          this.props.addCompany(newCompany);
          // console.log('error message', this.props);
          message.info("Company details successfully saved.");
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card title="Company Details" className="form-container">
        <Form onSubmit={this.onSubmit}>
          <Form.Item label={<span>Name</span>}>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please input your company name!",
                  whitespace: true
                }
              ]
            })(<Input name="name" />)}
          </Form.Item>

          <Form.Item label={<span>Address</span>}>
            {getFieldDecorator("address", {
              rules: [
                {
                  required: true,
                  message: "Please input your company address!",
                  whitespace: true
                }
              ]
            })(<Input name="address" />)}
          </Form.Item>

          <Form.Item label={<span>Conatct Person</span>}>
            {getFieldDecorator("person", {
              rules: [
                {
                  required: true,
                  message: "Please input your contact person name!",
                  whitespace: true
                }
              ]
            })(<Input name="person" />)}
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
            })(<Input name="email" />)}
          </Form.Item>
          <Form.Item label={<span>Phone</span>}>
            {getFieldDecorator("phone", {
              rules: [
                {
                  required: true,
                  message: "Please input company contact number!",
                  whitespace: true
                }
              ]
            })(<Input name="phone" />)}
          </Form.Item>

          <Form.Item label={<span>Fax</span>}>
            {getFieldDecorator("fax", {
              rules: [{ whitespace: true }]
            })(<Input name="fax" />)}
          </Form.Item>

          <Form.Item label={<span>Website</span>}>
            {getFieldDecorator("url", {
              rules: [{ whitespace: true }]
            })(<Input name="url" />)}
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
}

const mapDispatchToProps = dispatch => {
  return {
    addCompany: data => dispatch(addCompany(data))
  };
};

const WrapCompanyForm = Form.create({ name: "companyform" })(CompanyForm);

export default connect(null, mapDispatchToProps)(WrapCompanyForm);
