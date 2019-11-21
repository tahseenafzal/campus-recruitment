import React, { Component } from "react";
import { deleteStudent } from "../../../Store/Actions/StudentActions";
import { connect } from "react-redux";

class StudentItem extends Component {
  onDelete = id => {
    this.props.deleteStudent(id);
  };

  render() {
    const { id, name, address, email, contact, url } = this.props;

    return (
      <div className="card bg-light">
        <h3 className="text-primary text-left">{name}</h3>
        <h4>{address}</h4>
        <ul className="list">
          {email && <li>{email}</li>}
          {contact && <li>{contact}</li>}
          {url && <li>{url}</li>}
        </ul>
        <p>
          <button className="btn btn-dark btn-sm">Edit</button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.onDelete(id)}
          >
            Delele
          </button>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteStudent: data => dispatch(deleteStudent(data))
  };
};

export default connect(null, mapDispatchToProps)(StudentItem);
