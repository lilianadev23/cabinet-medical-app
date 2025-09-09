import React from "react";
import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import DataTable from "react-data-table-component";
import ModalRendezVous from "../components/ModalRendezVous";

import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Select, { components } from "react-select";

const RendezVous = ({ rdv, fetchRdv,users,salles }) => {
    const [showFormModal, setShowFormModal] = useState(false);
    const [currentMedicament, setCurrentMedicament] = useState(null);
    const [filterText, setFilterText] = useState("");
   
  console.log(rdv)
    
  const allColumns = [
    {
      name: "Date",
      selector: (row) => new Date(row.dateRDV).toLocaleDateString(), // format lisible
      sortable: true,
      id: "dateRDV",
      hideBelow768: false, // toujours visible
    },
    {
      name: "Heure",
      selector: (row) => row.heureRDV,
      sortable: true,
      id: "heureRDV",
      hideBelow768: true,
    },
    {
      name: "Patient",
      selector: (row) => `${row.patient?.prenom || ''} ${row.patient?.nom || ''}`,
      sortable: true,
      id: "patient",
      hideBelow768: false, // toujours visible
    },
    {
      name: "Médecin",
      selector: (row) => `${row.medecin?.prenom || ''} ${row.medecin?.nom || ''}`,
      sortable: true,
      id: "medecin",
      hideBelow768: true,
    },
    {
      name: "Salle",
      selector: (row) => row.salle?.nom || '',
      sortable: true,
      id: "salle",
      hideBelow768: false, // toujours visible
    },
    {
      name: "Statut",
      selector: (row) => row.statut,
      sortable: true,
      id: "statut",
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
          <button
            className="btn btn-sm btn-icon btn-outline-success rounded-circle mr-1"
            title="Modifier"
            onClick={() => openFormModal(row)}
          >
            <i className="fal fa-pen" />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  
   
  
  
    // Filtrer les données
    const filteredItems = rdv.filter(
      (item) =>
        item.patient?.nom?.toLowerCase().includes(filterText.toLowerCase()) ||
        item.medecin?.nom?.toLowerCase().includes(filterText.toLowerCase()) ||
        item.salle?.nom?.toLowerCase().includes(filterText.toLowerCase())
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
      doc.text("Liste des médicaments", 14, 20);
  
      const tableColumn = allColumns.map((col) => col.name);
      const tableRows = filteredItems.map((item) => [
        item.dateRDV,
        item.heureRDV,
       
      ]);
  
      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 30,
      });
  
      doc.save("utilisateurs.pdf");
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
          <strong>🧍 code cip :</strong> {data.dateRDV}
        </p>
        <p>
          <strong>✉️ Nom Commercial :</strong> {data.heureRDV}
        </p>
        <p>
          <strong>✉️ Nom patient :</strong> {data.patient}
        </p>
        <p>
          <strong>✉️ Nom medecin :</strong> {data.medecin}
        </p>
        <p>
          <strong>✉️ Nom salle :</strong> {data.salle}
        </p>
        <p>
          <strong>✉️ Nom statut :</strong> {data.statut}
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
    
   
  
  
  
  
  
  // Crud
  const openFormModal = (medicament = null) => {
    setCurrentMedicament(medicament); // null si création, objet si édition
    setShowFormModal(true);
  };
  
  const closeFormModal = () => {
    setShowFormModal(false);
    setCurrentMedicament(null);
  };
  
    
  
  
  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer ce RDV ?")) return;
  
    try {
      const res = await axios.delete(`http://localhost:5000/api/rendezVous/${id}`);
  
      if (res.status === 200 || res.status === 204) {
        alert("RDV supprimé avec succès !");
        fetchRdv(); // Fonction à appeler pour recharger la liste
        if (currentMedicament && currentMedicament.id === id) {
          setCurrentMedicament(null); // Réinitialiser si c’était en cours d'édition
        }
      } else {
        alert("Erreur lors de la suppression du RDV.");
      }
    } catch (error) {
      console.error("Erreur suppression :", error);
      alert("Erreur réseau ou serveur lors de la suppression.");
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
            <i className="subheader-icon fal fa-" /> Gestion Des Rendez Vous
            <span className="fw-300"></span>{" "}
            <sup className="badge badge-danger fw-500">Privée</sup>
            <small></small>
          </h1>
          <div className="subheader-block"></div>
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
                        onClick={openFormModal}
                       
                      >
                        Nouveau RDV
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
                  Liste Des Rendez Vous :{" "}
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
                      noDataComponent="Aucun Rendez Vous à afficher"
                    />
                      {/* Modal Right Transparent*/}
        {/* Modal Right */}
        <ModalRendezVous show={showFormModal} salles={salles} users={users} Onsave={fetchRdv} onClose={closeFormModal} medicamentToEdit={currentMedicament} />
        {/* Modal Left Transparent*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    )
}

export default RendezVous