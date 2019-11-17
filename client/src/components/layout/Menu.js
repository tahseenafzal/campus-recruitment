import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const MenuBar = () => {
  return (
    <Menu
      // onClick={this.handleClick}
      style={{ width: "100%" }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user" />
            <span>Addmin Pannel</span>
          </span>
        }
      >
        <Menu.Item key="1">
          <Link to="/jobs-list">Jobs List</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/students-list">Students List</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/companies-list">Companies List</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="appstore" />
            <span>Company</span>
          </span>
        }
      >
        <Menu.Item key="5">
          <Link to="/">Company Info</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/createjob">Job Posts</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub3"
        title={
          <span>
            <Icon type="idcard" />
            <span>Students</span>
          </span>
        }
      >
        <Menu.Item key="9">
          <Link to="/student">Personal Info</Link>
        </Menu.Item>
        <Menu.Item key="10">Apply</Menu.Item>
        <Menu.Item key="11">Applied Jobs</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default MenuBar;
