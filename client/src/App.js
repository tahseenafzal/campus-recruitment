import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Company from "./components/pages/company/Company";
import About from "./components/pages/About";
import MenuBar from "./components/layout/Menu";
import WrappedLogin from "./components/pages/login/Login";
import WrapRegister from "./components/pages/Register";
import WrapStudentForm from "./components/pages/student/StudentForm";
import WrapJobForm from "./components/pages/jobs/JobForm";
import WrapCompanyForm from "./components/pages/company/CompanyForm";
import JobList from './components/pages/admin/JobList';
import StudentList from "./components/pages/admin/StudentList";
import CompanyList from "./components/pages/admin/CompanyList";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      {/* <Route exact path='/login' component={WrappedLogin} /> */}
      <Content>
        <Layout>
          <Header className="bg-primary header-size">
            <Navbar />
          </Header>
          <Layout style={{ overflow: "hidden" }}>
            <Sider className="sider-style">
              <MenuBar />
            </Sider>
            <Content className="content-page">
              <Switch>
                <Route exact path="/" component={Company} />
                <Route exact path="/student" component={WrapStudentForm} />
                <Route exact path="/createjob" component={WrapJobForm} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={WrappedLogin} />
                <Route exact path="/register" component={WrapRegister} />
                <Route exact path="/logout" />
                <Route exact path="/jobs-list" component={JobList} />
                <Route exact path="/students-list" component={StudentList} />
                <Route exact path="/companies-list" component={CompanyList} />
                <Route
                  exact
                  path="/companydetail"
                  component={WrapCompanyForm}
                />
              </Switch>
            </Content>
          </Layout>
          <Footer height="5px" className="footer-size">
            Campus Recruitment 2019 Created by: Axiom Students
          </Footer>
          {/* <div className="">
            <h3>Campus Recruitment 2019 Created by: Axiom Students</h3>
          </div> */}
        </Layout>
      </Content>
    </BrowserRouter>
  );
}

export default App;
