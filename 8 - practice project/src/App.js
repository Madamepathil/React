import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserList = (age, name) => {
    setUsers((prevState) => {
      return [
        ...prevState,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser addUserList={addUserList} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
