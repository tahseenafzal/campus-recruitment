import React, { Component } from "react";
import { getJobs } from "../../../Store/Actions/JobActions";
import { List, Card } from "antd";
import { connect } from "react-redux";
import JobItem from "../jobs/JobItem";


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
    console.log('component state', this.state)
    console.log(data)
    return (
      <Card className="card" titl="Jobs List">
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <JobItem
                id={item._id}
                title={item.title}
                description={item.description}
                requirement={item.requirement}
              />
            </List.Item>
          )}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  console.log('this is state', state)
  return {
    jobs: state.job.jobs.jobs,
    loading: state.job.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getJobs: () => dispatch(getJobs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
