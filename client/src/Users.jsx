import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container vh-100 p-3 w-100 mt-3 border rounded-round">
      <div className="d-flex justify-content-between w-100 my-3">
        <h5>Liste Users :</h5>
        <button className="btn btn-outline-primary">Add User</button>
      </div>
      <div className="d-flex">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Recherche ......"
        />
        <button className="btn btn-outline-success ms-2">Rechercher</button>
      </div>
      <div>
        <table className="table table-dark table-bordered table-hover my-3">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Age</th>
              <th>Profile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.nom}</td>
                  <td>{user.age}</td>
                  <td>{user.profile}</td>
                  <td>
                    <button className="btn btn-outline-success mx-3">
                      Update
                    </button>
                    <button className="btn btn-outline-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
