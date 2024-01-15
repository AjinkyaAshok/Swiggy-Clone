import { useState } from "react";

const User = (props) => {
  const { name, location } = props;

  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-container">
      <h3>Name: {name}</h3>

      <h3>Location: {location}</h3>
      <h3>Count {count}</h3>
      <button
        onClick={() => {
        const counte = count + 1;
          setCount(counte);
        }}
      >
        Increase Count
      </button>
      <h3>Count {count2}</h3>
      <h3>Contact: 9021630023</h3>
    </div>
  );
};
export default User;
