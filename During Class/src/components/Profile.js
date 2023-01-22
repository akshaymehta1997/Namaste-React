import React, { useEffect, useState } from "react";

function Profile({ name = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log("Hello Class");
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Profile Function Component</h2>
      <h3>Name: {name}</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Button func</button>
    </div>
  );
}

export default Profile;
