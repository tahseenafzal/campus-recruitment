import React, { Component } from "react";
import { List, Card } from "antd";
import { getCompanies } from "../../../Store/Actions/CompanyActions";
import { connect } from "react-redux";
import Loader from "../../layout/Loader";
import CompanyItem from "../company/CompanyItem";
import { Capitalize, titleCase } from "../../../helpers/utilities";

class CompanyList extends Component {
  state = {
    loading: true,
    companies: []
  };

  static getDerivedStateFromProps({ companies, loading }) {
    return {
      companies,
      loading
    };
  }

  componentDidMount() {
    this.props.getCompanies();
  }

  render() {
    const { companies, loading } = this.state;
    return (
      <Card className="card" title="Companies List">
        {loading ? 
          <Loader />
         : 
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={companies}
            renderItem={item => (
              <List.Item>
                <CompanyItem 
                  id={item._id}
                  name={titleCase(item.name)}
                  address={Capitalize(item.address)}
                  email={item.email}
                  contact={item.contact}
                  url={item.url}
                />
              </List.Item>
            )}
          />
        }
      </Card>
    );
  }
}

const mapStateToProps = state => {
  console.log("state data from props: ", state);
  return {
    companies: state.company.companies.companies,
    loading: state.company.loading,
    companyId: state.company.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCompanies: () => dispatch(getCompanies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
