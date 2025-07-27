import { useState } from "react";
import UserEditForm from "./UserEditForm";
import { Link } from "react-router";

export default function UserList({ users, refreshUsers }) {
  const [editingUser, setEditingUser] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cet utilisateur ?")) return;

    const res = await fetch(`http://localhost:5000/api/users/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Utilisateur supprimé");
      refreshUsers();
      if (editingUser && editingUser._id === id) setEditingUser(null);
    } else {
      alert("Erreur suppression");
    }
  };
  const goToEdit = () => {
    navigate("/edit-user", {
      state: {
        user: user,
        onUpdate: handleUserUpdate,
      },
    });
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between py-2">
          <h2>Liste des utilisateurs</h2>

          <Link className="btn btn-primary" type="button" to="/createuser">
            {" "}
            Nouveau Utilisateur
          </Link>
        </div>

        {users.length === 0 && <p>Aucun utilisateur</p>}
        <table className="table table-bordered table-danger table-hover">
          <thead>
            <tr>
              <th>Nom Et Prénom</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u.nom}</td>
                <td>{u.role}</td>
                <td>{u.email} </td>
                <td>
                  {" "}
                  <button
                    onClick={() => setEditingUser(u)}
                    style={{ marginLeft: 10 }}
                    className="btn btn-success"
                  >
                    Modifier
                  </button>
                  <Link to="/edituser" user={{ u }}>
                   Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(u._id)}
                    style={{ marginLeft: 10 }}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editingUser && (
          <UserEditForm
            user={editingUser}
            onCancel={() => setEditingUser(null)}
            onUpdated={() => {
              refreshUsers();
              setEditingUser(null);
            }}
          />
        )}
      </div>
    </>
  );
}
