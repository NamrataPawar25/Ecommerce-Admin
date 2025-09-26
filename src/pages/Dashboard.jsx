import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Dashboard = () => {
  const { loggedUser } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-primary">
          Welcome {loggedUser ? loggedUser.name || loggedUser.email : "User"} 🎉
        </h2>
        <p className="mt-2">You are now logged in to your dashboard.</p>
      </div>
    </div>
  );
};

export default Dashboard;
