import React from "react";
import { Card } from "antd";
// import "antd/dist/antd.css";

const About = () => {
  return (
    <div className='card-style'>
      <Card title="About this Application">
        <p className="my-1">
          This is Campus Recruitment System for job seeking help for student and
          companies will get relevent person for jobs.
        </p>
        <p className="bg-dark p">
          <strong>Version: </strong> 1.0.0
        </p>
      </Card>
    </div>
  );
};

export default About;
