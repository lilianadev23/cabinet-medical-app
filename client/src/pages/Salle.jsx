import React, { useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import ModalSalle from "../components/ModalSalle"; 

import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Select, { components } from "react-select";

const Salle = ({ salles, refreshSalle }) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [currentSalle, setCurrentSalle] = useState(null);
  const [filterText, setFilterText] = useState("");

  // ✅ Colonnes
  const allColumns = [
    {
      name: "Nom",
      selector: (row) => row.nom,
      sortable: true,
      id: "nom",
    },
    {
      name: "Capacité",
      selector: (row) => row.capacite,
      sortable: true,
      id: "capacite",
    },
    {
      name: "Statut",
      selector: (row) => row.statut,
      sortable: true,
      id: "statut",
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

  // ✅ Filtrer les données
  const filteredItems = salles.filter(
    (item) =>
      item.nom.toLowerCase().includes(filterText.toLowerCase()) ||
      item.statut.toLowerCase().includes(filterText.toLowerCase())
  );

  // ✅ Export Excel
  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredItems);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Salles");
    XLSX.writeFile(workbook, "salles.xlsx");
  };

  // ✅ Export PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Liste des salles", 14, 20);

    const tableColumn = allColumns.map((col) => col.name);
    const tableRows = filteredItems.map((item) => [
      item.nom,
      item.capacite,
      item.statut,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    doc.save("salles.pdf");
  };

  // ✅ CRUD
  const openFormModal = (salle = null) => {
    setCurrentSalle(salle);
    setShowFormModal(true);
  };

  const closeFormModal = () => {
    setShowFormModal(false);
    setCurrentSalle(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cette salle ?")) return;

    try {
      const res = await axios.delete(`http://localhost:5000/api/salles/${id}`);
      if (res.status === 200 || res.status === 204) {
        alert("Salle supprimée avec succès !");
        refreshSalle();
      } else {
        alert("Erreur lors de la suppression.");
      }
    } catch (error) {
      console.error("Erreur suppression :", error);
      alert("Erreur réseau ou serveur.");
    }
  };

  // ✅ Colonnes personnalisables
  const selectOptions = allColumns.map((col) => ({
    value: col.id,
    label: col.name,
  }));
  const [selectedOptions, setSelectedOptions] = useState(selectOptions);
  const selectedColumnIds = selectedOptions.map((opt) => opt.value);
  const filteredColumns = allColumns.filter((col) =>
    selectedColumnIds.includes(col.id)
  );

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

  const CustomOption = (props) => (
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

  const handleToggleAll = () => {
    if (selectedOptions.length === selectOptions.length) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions(selectOptions);
    }
  };

  const allSelected = selectedOptions.length === selectOptions.length;

  return (
    <div>
      <ol className="breadcrumb page-breadcrumb">
        <li className="breadcrumb-item">
          <a href="javascript:void(0);">SmartCabinet</a>
        </li>
        <li className="breadcrumb-item">Gestion Salle</li>
      </ol>

      <div className="subheader">
        <h1 className="subheader-title">
          <i className="subheader-icon fal fa-door-open" /> Gestion Des Salles
          <sup className="badge badge-danger fw-500">Privée</sup>
        </h1>
      </div>

      <div className="alert alert-primary">
        <div className="row w-100">
          <div className="col-lg-4 col-sm-12">
            <h5 className="me-4">Recherche :</h5>
            <input
              type="text"
              placeholder="Rechercher par nom ou statut"
              className="form-control mb-3"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              style={{ maxWidth: 300 }}
            />
          </div>

          <div className="col-lg-4 col-sm-12">
            <button className="btn btn-primary mx-2" onClick={exportExcel}>
              Exporter Excel
            </button>
            <button className="btn btn-danger mx-2" onClick={exportPDF}>
              Exporter PDF
            </button>
            <button
              className="btn btn-success mx-2"
              onClick={() => openFormModal()}
            >
              Nouvelle Salle
            </button>
          </div>

          <div className="col-lg-4 col-sm-6 d-flex">
            <Select
              isMulti
              closeMenuOnSelect={false}
              options={selectOptions}
              value={selectedOptions}
              components={{ Option: CustomOption }}
            />
            <button
              onClick={handleToggleAll}
              style={{
                padding: "6px 12px",
                marginLeft: "6px",
                backgroundColor: allSelected ? "#f8d7da" : "#d4edda",
                border: "1px solid #ccc",
                borderRadius: 4,
              }}
            >
              {allSelected ? "Tout masquer" : "Tout afficher"}
            </button>
          </div>
        </div>
      </div>

      <DataTable
        columns={filteredColumns}
        data={filteredItems}
        pagination
        highlightOnHover
        responsive
      />

           {/* ✅ Modal Salle */}
      <ModalSalle
        isOpen={showFormModal}
        onSave={refreshSalle}
        onClose={closeFormModal}
        salle={currentSalle}
      />
    </div>
  );
};

export default Salle;
