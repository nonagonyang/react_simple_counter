import React from "react";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //three lifecyle methods

  //mounting
  //not yet on the page, not yet showing
  //first show on the webpage
  componentDidMount() {
    console.log("mounted");
  }

  //updating
  //1>props change, the component rerender
  //2>the component has state variable, as the state change, the component updates
  componentDidUpdate() {
    console.log("updated");
  }

  //unmounting
  componentWillUnmount() {
    console.log("clean up");
  }

  clickedButton() {
    this.setState({ count: this.state.count + 1 });
    console.log("button clicked");
  }
  render() {
    return (
      <div>
        <p>Count:{this.state.count}</p>
        <button
          onClick={() => {
            this.clickedButton();
          }}
        >
          Increase
        </button>
      </div>
    );
  }
}
