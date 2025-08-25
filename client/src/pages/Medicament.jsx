import React from "react";
import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import DataTable from "react-data-table-component";

import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Select, { components } from "react-select";

const Medicament = ({ medicaments, refreshMedicament }) => {
    const [filterText, setFilterText] = useState("");
 
  const [formData, setFormData] = useState({
    codecip: '',
    nomcommercial: ''
  });

  
 
  const tableRef = useRef(null);

  // Filtrer les données
  const filteredItems = medicaments.filter(
    (item) =>
      item.codecip.toLowerCase().includes(filterText.toLowerCase()) ||
      item.nomcommercial.toLowerCase().includes(filterText.toLowerCase())
  );
 
  
  
  // Export Excel
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredItems);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Utilisateurs");
    XLSX.writeFile(workbook, "utilisateurs.xlsx");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Liste des utilisateurs", 14, 20);

    const tableColumn = columns.map((col) => col.name);
    const tableRows = filteredItems.map((item) => [
      item.nom,
      item.email,
      item.role,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save("utilisateurs.pdf");
  };

  

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cet utilisateur ?")) return;

    const res = await fetch(`http://localhost:5000/api/users/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("Utilisateur supprimé");
      refreshMedicament();
      if (editingUser && editingUser._id === id) setEditingUser(null);
    } else {
      alert("Erreur suppression");
    }
  };

  const allColumns = [
    {
      name: "codecip",
      selector: (row) => row.codecip,
      sortable: true,
      id: "codecip",
      hideBelow768: false, // toujours visible
    },
    {
      name: "nomcommercial",
      selector: (row) => row.nomcommercial,
      sortable: true,
      id: "nomcommercial",
      hideBelow768: true,
    },
  
  
    {
      name: "Actions",
      id: "Actions",
      cell: (row) => (
        <div>
          <button
            
            className="btn btn-sm btn-icon btn-outline-danger rounded-circle mr-1"
            title="Supprimer"
            onClick={() => handleDelete(row._id)}
          >
            <i className="fal fa-times" />
          </button>
          <div className="dropdown d-inline-block dropleft ">
            <button
              href="#"
              className="btn btn-sm btn-icon btn-outline-primary rounded-circle shadow-0"
              data-toggle="dropdown"
              aria-expanded="true"
              title="Plus options"
             
            >
              <i className="fal fa-ellipsis-v" />
            </button>
            <div className="dropdown-menu">
              <button className="dropdown-item" data-toggle="modal"
                      data-target=".default-example-modal-right"
              onClick={() => handleEdit(row)}>
                Modifier
              </button>
              <a className="dropdown-item" href="javascript:void(0);">
                Changer Statuts
              </a>
            </div>
          </div>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  const handleEdit = (user) => {
    console.log(user) 
  
      setFormData({
        role: user.role,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        telephone: user.telephone,
        adresse: user.adresse,
        CIN: user.CIN,
        dateNaissance: user.dateNaissance,
        sexe: user.sexe,
        motdepasse: user.motdepasse,
        statut: user.statut, 
        cabinet : user.cabinet, 
        dateDebut : user.dateDebut,
        specialite : user.specialite, 
        dateEmbauche : user.dateEmbauche,
        niveauEtude : user.niveauEtude,
        numCompteBancaire : user.numCompteBancaire,
       numCnss : user.numCnss,
       TypeDeContrat : user.TypeDeContrat,
       salaire : user.salaire,
       NumeroDeDossier : user.NumeroDeDossier,
     mutuelle : user.mutuelle,
      NumeroDeSecuriteSociale : user.NumeroDeSecuriteSociale,
      Profession : user.Profession,
     GroupeSanguin : user.GroupeSanguin,
      MedecinTraitant : user.MedecinTraitant,
      AllergiesConnues : user.AllergiesConnues,
      PathologiesChroniques : user.PathologiesChroniques,   
        
      });
    
     
  };

  const customStyles = {
    table: {
      style: {
        borderCollapse: "collapse", // Pour bordures continues
        border: "1px solid #dee2e6", // Bordure extérieure
        borderRadius: "10px",
        overflow: "hidden",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#003c8f",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "bold",
        textTransform: "uppercase",
      },
    },
    headCells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "16px",
        borderRight: "1px solid #dee2e6", // Bordure entre colonnes
        borderBottom: "1px solid #dee2e6",
      },
    },
    rows: {
      style: {
        borderBottom: "1px solid #dee2e6", // Bordure ligne
        backgroundColor: "#fff",
        minHeight: "50px",
      },
      stripedStyle: {
        backgroundColor: "#f8f9fa", // ✅ Couleur alternée
      },
    },
    cells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "16px",
        fontSize: "15px",
        borderRight: "1px solid #dee2e6", // Bordure verticale cellule
      },
    },
    pagination: {
      style: {
        borderTop: "1px solid #dee2e6",
        padding: "8px",
      },
    },
  };
// 👇 Options pour react-select pour ajoute
const selectOptions = allColumns.map((col) => ({
    value: col.id,
    label: col.name,
  }));
  const [selectedOptions, setSelectedOptions] = useState(selectOptions); // Tout sélectionné au début
  
  // Extraire les colonnes sélectionnées
  const selectedColumnIds = selectedOptions.map((opt) => opt.value);

  const filteredColumns = allColumns.filter((col) =>
    selectedColumnIds.includes(col.id)
  );
  // 🔄 Toggle colonne visible/masquée
  const toggleColumn = (clickedOption) => {
    const isSelected = selectedColumnIds.includes(clickedOption.value);
    if (isSelected) {
      setSelectedOptions((prev) =>
        prev.filter((opt) => opt.value !== clickedOption.value)
      );
    } else {
      setSelectedOptions((prev) => [...prev, clickedOption]);
    }
  };

  // 🎨 Custom style pour afficher couleur différente selon sélection
  const customStyles2 = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#d4edda" // vert clair pour colonnes affichées
        : state.isFocused
        ? "#f8d7da" // rouge clair au hover
        : "#f5f5f5", // gris clair sinon
      color: "#333",
      cursor: "pointer",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#d4edda", // tag sélectionné en vert clair
      color: "#333",
    }),
  };

  // ✅ Option personnalisée avec checkbox
  const CustomOption = (props) => {
    return (
      <components.Option {...props}>
        <div
          onClick={(e) => {
            e.preventDefault();
            toggleColumn(props.data);
          }}
        >
          <input
            type="checkbox"
            checked={selectedColumnIds.includes(props.data.value)}
            readOnly
            style={{ marginRight: 8 }}
          />
          {props.data.label}
        </div>
      </components.Option>
    );
  };

  // 🔁 Tout afficher / masquer
  const handleToggleAll = () => {
    if (selectedOptions.length === selectOptions.length) {
      setSelectedOptions([]); // Tout masquer
    } else {
      setSelectedOptions(selectOptions); // Tout afficher
    }
  };


  const allSelected = selectedOptions.length === selectOptions.length;
  const ExpandedComponent = ({ data }) => (
    <div style={styles.card}>
      <p>
        <strong>🧍 code cip :</strong> {data.codecip}
      </p>
      <p>
        <strong>✉️ Nom Commercial :</strong> {data.nomcommercial}
      </p>
     
      <p>
        <strong>🆔 ID :</strong> {data._id}
      </p>
    </div>
  );
  // ✅ Styles de la carte
  const styles = {
    card: {
      margin: "10px 20px",
      padding: "15px",
      backgroundColor: "#f1f5f9",
      borderRadius: "8px",
      border: "1px solid #ddd",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      fontSize: "14px",
      lineHeight: "1.6",
    },
  };
  
  const handleChangeadd = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {      
        codecip: formData.codecip,
        nomcommercial: formData.nomcommercial    
    };

  

    const res = await fetch('http://localhost:5000/api/medicaments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const resText = await res.text();
    console.error('Erreur serveur :', res.status, resText);
    if (res.ok) {
      alert('Médicament ajouter avec success !');
      setFormData({
        codecip: '',
        nomcommercial: ''
      });
    
     
      
    } else {
      alert('Erreur création Médicament');
    }
  };
  return (
    <div>
      &lt;&gt;
      <ol className="breadcrumb page-breadcrumb">
        <li className="breadcrumb-item">
          <a href="javascript:void(0);">SmartCabinet</a>
        </li>
        <li className="breadcrumb-item">Gestion Médicament</li>

        <li className="position-absolute pos-top pos-right d-none d-sm-block">
          <span className="js-get-date" />
        </li>
      </ol>
      <div className="subheader">
        <h1 className="subheader-title">
          <i className="subheader-icon fal fa-" /> Gestion Des Médicaments
          <span className="fw-300"></span>{" "}
          <sup className="badge badge-danger fw-500">Privée</sup>
          <small></small>
        </h1>
        <div className="subheader-block">Right content of header</div>
      </div>
      <div className="alert alert-primary">
        
          
          
              
              
             
              <div className="row w-100">
                  <div className="col-lg-4 col-sm-12 d-flex justify-content-center align-items-center">
                  
                  <h5 className="me-4">Recherche :</h5>
                  <input
                    type="text"
                    placeholder="Rechercher par nom ou email"
                    className="form-control  mb-3"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    style={{ maxWidth: 300 }}
                  />
                  
                 </div>
                  <div className="col-lg-4 col-sm-12">
                    <button
                      className="btn btn-primary mx-2"
                      onClick={exportExcel}
                    >
                      Exporter Excel
                    </button>
                    <button className="btn btn-danger mx-2" onClick={exportPDF}>
                      Exporter PDF
                    </button>

                    
                    <button
                      className="btn btn-success mx-2"
                      data-toggle="modal"
                      data-target=".default-example-modal-right"
                     
                    >
                      Nouveau Utilisateur
                    </button>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                  <div className="d-flex mb-3">
                  {/* ✅ Select multi avec design custom */}
                  <Select
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    options={selectOptions}
                    value={selectedOptions}
                    components={{
                      Option: CustomOption,
                      ValueContainer: (props) => (
                        <components.ValueContainer {...props}>
                          <div
                            style={{
                              padding: "2px 6px",
                              color: "#666",
                              fontStyle: "italic",
                            }}
                          >
                            🛠️ Personnalisez les colonnes à afficher
                          </div>
                        </components.ValueContainer>
                      ),
                      MultiValue: () => null, // On masque les tags sélectionnés
                    }}
                    styles={customStyles}
                  />

                  {/* ✅ Bouton tout afficher / masquer */}

                  <button
                    onClick={handleToggleAll}
                    style={{
                      padding: "6px 12px",
                      marginLeft: "6px",
                      backgroundColor: allSelected ? "#f8d7da" : "#d4edda",
                      border: "1px solid #ccc",
                      borderRadius: 4,
                      cursor: "pointer",
                    }}
                  >
                    {allSelected ? "Tout masquer" : "Tout afficher"}
                  </button>
                </div>
                  </div>
                </div>
             
            
        
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div id="panel-1" className="panel">
            <div className="panel-hdr">
              <h2>
                Liste Des Médicaments :{" "}
                <span className="fw-300">
                  <i>Title</i>
                </span>
              </h2>
              <div className="panel-toolbar">
                <button
                  className="btn btn-panel"
                  data-action="panel-collapse"
                  data-toggle="tooltip"
                  data-offset="0,10"
                  data-original-title="Collapse"
                />
                <button
                  className="btn btn-panel"
                  data-action="panel-fullscreen"
                  data-toggle="tooltip"
                  data-offset="0,10"
                  data-original-title="Fullscreen"
                />
                <button
                  className="btn btn-panel"
                  data-action="panel-close"
                  data-toggle="tooltip"
                  data-offset="0,10"
                  data-original-title="Close"
                />
              </div>
            </div>
            <div className="panel-container show">
              <div className="panel-content">
                
               
                <div
                  ref={tableRef}
                  style={{
                    width: "100% !important",
                    overflowX: "auto !important",
                  }}
                >
                  <DataTable
                    columns={filteredColumns}
                    data={filteredItems}
                    customStyles={customStyles}
                    pagination
                    highlightOnHover
                    responsive
                    // ✅ Ajout du bouton + pour voir les détails
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    selectableRows
                    selectableRowsHighlight // surligne la ligne sélectionnée
                    selectableRowsSingle // limite à une seule ligne sélectionnée
                    // ✅ Callback si tu veux récupérer les lignes sélectionnées
                    onSelectedRowsChange={(selected) => {
                      console.log(
                        "Lignes sélectionnées :",
                        selected.selectedRows
                      );
                    }}
                    noDataComponent="Aucun utilisateur à afficher"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Right Transparent*/}
      {/* Modal Right */}
      <div
        className="modal fade default-example-modal-right"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-right">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title h4">Formulaire Médicaments :</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fal fa-times" />
                </span>
              </button>
            </div>
            <form onSubmit={handleSubmit} >
            <div className="modal-body">
              <div className="card mb-5">
                <div className="card-body p-3">
                 

                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-addon1">
                    Code CIP :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input
                        type="text"
                        id="basic-addon1"
                        className="form-control"
                        placeholder="Code CIP"
                        aria-label="Code Cip"
                        aria-describedby="basic-addon1"
                        name="codecip" 
                        value={formData.codecip} 
                        onChange={handleChangeadd}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-addon1">
                    Nom Commercial :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input
                        type="text"
                        id="basic-addon1"
                        className="form-control"
                        placeholder="Nom Commercial"
                        aria-label="nomcommercial"
                        aria-describedby="basic-addon1"
                        name="nomcommercial" 
                        value={formData.nomcommercial} 
                        onChange={handleChangeadd}
                      />
                    </div>
                  </div>           
        
                </div>
              </div>
            
             
              
              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button  type="submit" className="btn btn-primary">
                Save changes
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
      {/* Modal Left Transparent*/}
    </div>
  )
}

export default Medicament