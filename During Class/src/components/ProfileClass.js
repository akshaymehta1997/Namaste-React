import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
      userInfo: {},
    };
    console.log("Constructor" + this.props.name);
  }

  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/akshaymehta1997");

    // const json = await data.json();
    // console.log(json);
    // this.setState({ userInfo: json });

    this.timer = setInterval(() => {
      console.log("Hey");
    }, 1000);
    console.log("Component Did Mount" + this.props.name);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { name, xyz } = this.props;
    const { count, count2 } = this.state;
    console.log("render" + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this?.state?.userInfo?.avatar_url}></img>
        <h2>Name: {name}</h2>
      </div>
    );
  }
}

export default Profile;
