import React, { Component } from "react";
import { List, Card } from "antd";
import { getJobs } from "../../../Store/Actions/JobActions";
import { connect } from "react-redux";

class JobList extends Component {
  state = {
    loading: true,
    jobs: []
  };

  static getDerivedStateFromProps({ jobs, loading }) {
    return {
      jobs, 
      loading
    };
  }

  componentDidMount() {
    this.props.getJobs();
  }

  render() {
        
    const data = this.state.jobs;
    
    return ( 
      <Card titl="Job List">
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>
                <p>{item.description}</p>
                <p>{item.requirement}</p>
              </Card>
            </List.Item>)
          }
        />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.job.jobs.jobs,
    loading: state.job.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getJobs: data => dispatch(getJobs(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
