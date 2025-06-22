import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      count1: 2,
      userInfo: [
        {
          id: 1,
          name: "example",
          location: "example",
          email: "0JHlO@example.com",
        },
      ],
    };

    console.log(this.props.name + " child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " child component Did Mount");
    //API calls.

    setInterval(() => {
      console.log("hello");
    }, 1000);
    const data = await fetch("https://api.github.com/users/geekyneha");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("child component Did Update");
    if (this.state.count !== prevState.count) {
      // code.
    }
  }
  componentWillUnmount() {
    clearInterval();
  }
  render() {
    const { name, location } = this.props;
    const { count, count1, userInfo } = this.state;

    console.log(this.props.name + "child render.");
    debugger;
    return (
      <>
        <div className="user-container">
          <h3>User Class Component</h3>
          <h4>count: {count}</h4>
          <h4>count1:{count1}</h4>

          <button
            className="increment-btn"
            onClick={() => {
              this.setState({
                count: count + 1,
                count1: count1 + 2,
              });
            }}
          >
            Increment
          </button>
          <p>name: {userInfo.name}</p>
          <p>city: {userInfo.location}</p>
          <p>age: 20</p>
          <p>email: 0JHlO@example.com</p>
        </div>
      </>
    );
  }
}

/*Parent constructor
Parent render

    First child constructor
    First child render
    First child component Did Mount

    Second child constructor
    Second child render
    Second child component Did Mount

Parent Did Mount 
*/

export default UserClass;

/***
 * ----MOUNTING LIFE CYCLE----
 * constructor
 * render (dummy data )
 *   <Html Dummy/>
 *
 * componetDidMount
 *        <Api call>
 *         <this.setState>
 *
 *
 * ##setState triggers the reconciliation phase
 * ----UPDATING LIFE CYCLE----
 *
 * constructor
 *   render(Api data)
 *   <Html (new Api data)>
 *
 * componentDidUpdate
 *
 * ## mounting means showing on to the UI
 * ## updating means updating the UI
 * ## unmounting means removing from the UI
 *
 *
 *-----Unmounting Life Cycle----
 *
 * when we remove the component from the UI
 *
 *
 * componentWillUnmount
 *
 *  here we can do cleanup work like removing event listeners or timers.
 *
 *
 *
 */
