import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../../Store/Actions/UserActions";

import { Form, Input, Radio, Button, Card, message } from "antd";

class Register extends Component {

  state = {
    usertype: 'Student'
  }

  radioValue = e => {
    this.setState({
      usertype: e.target.value
    })
  }

  componentWillReceiveProps(){
    
    const isError = this.props.errMessage;
    const isSuccess = this.props.successMsg;
    
    if(isError){
      message.error(this.props.errMessage)
    }

    if(isSuccess){
      message.info('User register successfully.')
    }

  } 

  onSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const { username, email, password } = values;
      if (!err) {
        if (username === "" || password === "") {
          message.error("Please enter username and password");
        } else {
          
            const newUser = {
              username,
              email,
              password,
              usertype: this.state.usertype
            }
            
            this.props.addUser(newUser);
            // console.log('error message', this.props);
            // message.info(this.props.errMessage);     
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Card title="User Register" className="login-card">
  {/* <h1>this is error {this.props.errMessage}</h1> */}
        <Form onSubmit={this.onSubmit}>
          <Form.Item label={<span>Name</span>}>
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "Please input your username!",
                  whitespace: true
                }
              ]
            })(<Input onChange={this.changeValue} />)}
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
            })(
              <Input
                name="email"
              />
            )}
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
            })(
              <Input.Password
                name="password"                
              />
            )}
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

              <Radio.Group name="usertype" defaultValue="Student" onChange={this.radioValue} width="100%">
                <Radio.Button value="Student">
                  Student
                </Radio.Button>
                <Radio.Button value="Company">
                  Company
                </Radio.Button>
                <Radio.Button value="Admin">
                  Admin
                </Radio.Button>
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
}

const WrapRegister = Form.create({ name: "register" })(Register);

const mapStateToProps = (state) => {
  console.log('this is state: ',state.user)
  return{
    errMessage: state.user.error,
    successMsg: state.user.success
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: data => dispatch(addUser(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrapRegister);
