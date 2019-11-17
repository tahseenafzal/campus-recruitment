import React, { Component } from "react";
import { List, Card } from "antd";
import { getCompanies } from "../../../Store/Actions/CompanyActions";
import { connect } from "react-redux";

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
    const data = this.state.companies;
    return (
      <Card className="card" titl="Companies List">
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card className="card" title={item.name}>
                <h3>{item.address}</h3>
                <p>Email: {item.email}</p>
                <br />
                <p>Contact: {item.phone}</p>
                <p>Website: {item.url}</p>
              </Card>
            </List.Item>
          )}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.company.companies.companies,
    loading: state.company.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCompanies: data => dispatch(getCompanies(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
