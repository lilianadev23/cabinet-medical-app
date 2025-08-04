import { useState } from "react";
import UserEditForm from "./UserEditForm";
import { Link } from "react-router";
import DataTable from "react-data-table-component";

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

  const columns = [
    {
      name: "Nom Et Prénom",
      selector: row => row.nom,
      sortable: true,
    },
    {
      name: "Email",
      selector: row => row.email,
      sortable: true,
    },
    {
      name: "Role",
      selector: row => row.role,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div>
          <button
            onClick={() => setEditingUser(row)}
            style={{ marginRight: 10 }}
            className="btn btn-success"
          >
            Modifier
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(row._id)}
          >
            Supprimer
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      },
    },
    headCells: {
      style: {
        backgroundColor: '#dc3545', // couleur rouge comme votre table-danger
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
      },
    },
    cells: {
      style: {
        fontSize: '15px',
      },
    },
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between py-2">
          <h2>Liste des utilisateurs</h2>

          <Link className="btn btn-primary" type="button" to="/createuser">
            Nouveau Utilisateur
          </Link>
        </div>

        {users.length === 0 && <p>Aucun utilisateur</p>}
        
        <DataTable
          columns={columns}
          data={users}
          customStyles={customStyles}
          pagination
          highlightOnHover
          pointerOnHover
          noDataComponent="Aucun utilisateur à afficher"
        />

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