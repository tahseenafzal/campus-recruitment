import React, { Component } from "react";
import { getJobs } from "../../../Store/Actions/JobActions";
import { List, Card } from "antd";
import { connect } from "react-redux";
import JobItem from "../jobs/JobItem";
import Loader from "../../layout/Loader";
import { Capitalize, titleCase } from "../../../helpers/utilities";

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
    const {jobs, loading} = this.state;
    return ( 
      <Card className="card" title="Jobs List">
        {loading ? <Loader /> :
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={jobs}
          renderItem={item => (
            <List.Item>
              <JobItem
                id={item._id}
                title={titleCase(item.title)}
                description={Capitalize(item.description)}
                requirement={Capitalize(item.requirement)}
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
