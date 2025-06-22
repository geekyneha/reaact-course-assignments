import { useEffect, useState } from "react";
const User = ({ name, location }) => {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(5);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("hello");
  //   }, 1000);

  //   //  this will get called when unmounting . leaving the component or page.
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  return (
    <>
      <div className="user-container">
        <h3>User Component</h3>
        <h4>count: {count}</h4>
        <h4>count1: {count1}</h4>
        <button
          className="increment-btn"
          onClick={() => {
            setCount(count + 1);
            setCount1(count1 + 5);
          }}
        >
          Increment
        </button>
        <p>name: {name}</p>
        <p>city: {location}</p>
        <p>age: 25</p>
        <p>email: 0JHlO@example.com</p>
      </div>
    </>
  );
};

export default User;
