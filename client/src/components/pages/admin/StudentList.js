import React, { Component } from "react";
import { List, Card } from "antd";
import { getStudents } from "../../../Store/Actions/StudentActions";
import { connect } from "react-redux";

class StudentList extends Component {
  state = {
    loading: true,
    students: []
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
        
    const data = this.state.students;
    console.log(data);    
    return ( 
      <Card titl="Students List">
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card className="card" title={item.firstname + " " + item.lastname}>
                <h3>{item.qualification}</h3>
          <p>Email: {item.email}</p>
                <br/>
                <p>Address: {item.address}</p>
                <p>Mobile: {item.mobile}</p>
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
