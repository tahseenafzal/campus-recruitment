import React, { Fragment, Component } from "react";
import { Card, Empty, Button } from "antd";
// import WrapCompanyForm from "./CompanyForm";
import { Link } from "react-router-dom";

class Company extends Component {
  
  

  render(){

    return (
      <Fragment>
        <div>
          <Card title="Company Page" >
          <Empty
           image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
           imageStyle={{
             height: 100,
             width:  120,
             aligh: "center"
           }}
          >
            <Button type='primary'>
            <Link to="/companydetail">Company Info</Link>
            </Button>
          </Empty>
              
          </Card>
        </div>
      </Fragment>
    );
  }
};

export default Company;
