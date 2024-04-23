import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=5")
    setUsers(response.data.results)
  }

  useEffect(() => {
    fetchUsers();
  },[]);

  return <div>
    Hi.
  </div>;
};

export default UserList;
