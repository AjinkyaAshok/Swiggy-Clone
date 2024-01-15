import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  async componentDidMount() {
    const data = await fetch("https://github.com/AjinkyaAshok");
    const json = await data.json();
    this.state({
        userInfo:json,
    })
    console.log(json)
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-container">
        <h3>Name:{name}</h3>
        <h3>Location:{location}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <h3>Count:{count}</h3>
        <h3>Count:{count2}</h3>
        <h3>Contact: 9021630023 </h3>
      </div>
    );
  }
}

export default UserClass;
