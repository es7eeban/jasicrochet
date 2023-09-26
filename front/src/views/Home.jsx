import { useState, useEffect } from "react";
const Home = () => {
  const [usersData, setUsersdata] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3002/home")
      .then((response) => response.json())
      .then((response) => {
        setUsersdata(response);
      });
  }, []);

  return (
    <div>
      <h1>home</h1>
      {typeof usersData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        usersData.users.map((user, i) => <p key={i}>{user.name}</p>)
      )}
    </div>
  );
};

export default Home;
