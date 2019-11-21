import React, { Component } from "react";
import { List, Card } from "antd";
import { getStudents } from "../../../Store/Actions/StudentActions";
import { connect } from "react-redux";
import StudentItem from "../student/StudentItem";
import Loader from "../../layout/Loader";
import { Capitalize } from "../../../helpers/utilities";

class StudentList extends Component {
  state = {
    loading: true,
    students: {}
  };

  static getDerivedStateFromProps({ students, loading }) {
    return {
      students,
      loading
    };
  }


  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    const { students, loading } = this.state;
    return (
      <Card title="Students List">
        {loading ? (
          <Loader />
        ) : (
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={students}
            renderItem={item => (
              <List.Item>
                <StudentItem
                  id={item._id}
                  qualification={Capitalize(item.qualification)}
                  name={Capitalize(item.firstname) + " " + Capitalize(item.lastname)}
                  email={item.email}
                  contact={"0" + item.mobile}
                  home={item.home}
                  address={Capitalize(item.address)}
                  updateStudents={this.updateStudents}
                />
              </List.Item>
            )}
          />
        )}
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.student.students.students,
    loading: state.student.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStudents: data => dispatch(getStudents(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
