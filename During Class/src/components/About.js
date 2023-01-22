import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunc from "./Profile";
import React, { Component } from "react";

const About2 = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is the Namaste React Live Course Chapter 07 - Finding the Path</p>
      <ProfileFunc name={"Akshay"} />
      <ProfileClass name={"Akshay"} xyz="abc" />
    </div>
  );
};

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    console.log(" Parent Component Did Mount");
  }

  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path
        </p>
        <ProfileClass name={" First Child"} />
        {/* <ProfileClass name={" Second Child"} /> */}
        <ProfileFunc />
      </div>
    );
  }
}

export default About;
