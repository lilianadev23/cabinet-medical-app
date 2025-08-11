import React from "react";
import { useState, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import DataTable from "react-data-table-component";

import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Select, { components } from "react-select";

const Users = ({ users, refreshUsers }) => {
  const [filterText, setFilterText] = useState("");
  const [copied, setCopied] = useState(false);
  const allergieOptions = [
    { value: "penicilline", label: "Pénicilline" },
    { value: "aspirine", label: "Aspirine" },
    { value: "latex", label: "Latex" },
    { value: "arachide", label: "Arachides" },
    { value: "gluten", label: "Gluten" },
    { value: "oeufs", label: "Œufs" },
    { value: "lait", label: "Lait" },
    { value: "fruits_de_mer", label: "Fruits de mer" },
    { value: "pollen", label: "Pollen" },
    { value: "autre", label: "Autre" },
    { value: "aucune", label: "Aucune allergie connue" },
  ];
  const pathologiesOptions = [
    { value: "diabete", label: "Diabète" },
    { value: "hypertension", label: "Hypertension artérielle" },
    { value: "asthme", label: "Asthme" },
    { value: "cancer", label: "Cancer" },
    { value: "epilepsie", label: "Épilepsie" },
    { value: "cardiopathie", label: "Cardiopathie" },
    { value: "maladie_renale", label: "Maladie rénale chronique" },
    { value: "maladie_hepatique", label: "Maladie hépatique" },
    { value: "maladie_respiratoire", label: "Maladie respiratoire chronique" },
    { value: "autre", label: "Autre" },
    { value: "aucune", label: "Aucune pathologie chronique" },
  ];
  const tableRef = useRef(null);

  // Filtrer les données
  const filteredItems = users.filter(
    (item) =>
      item.nom.toLowerCase().includes(filterText.toLowerCase()) ||
      item.email.toLowerCase().includes(filterText.toLowerCase())
  );
  const specialites = [
    { value: "cardiologie", label: "Cardiologie" },
    { value: "dermatologie", label: "Dermatologie" },
    { value: "gastro", label: "Gastro-entérologie" },
    { value: "gynecologie", label: "Gynécologie" },
    { value: "pediatrie", label: "Pédiatrie" },
    { value: "ophtalmologie", label: "Ophtalmologie" },
    { value: "orl", label: "ORL" },
    { value: "neurologie", label: "Neurologie" },
    { value: "psychiatrie", label: "Psychiatrie" },
    { value: "rhumatologie", label: "Rhumatologie" },
    { value: "endocrinologie", label: "Endocrinologie" },
    { value: "pneumologie", label: "Pneumologie" },
    { value: "urologie", label: "Urologie" },
    { value: "hematologie", label: "Hématologie" },
    { value: "oncologie", label: "Oncologie" },
    { value: "medecine_generale", label: "Médecine générale" },
    { value: "medecine_interne", label: "Médecine interne" },
    { value: "allergologie", label: "Allergologie" },
    { value: "medecine_du_sport", label: "Médecine du sport" },
    { value: "geriatrie", label: "Gériatrie" },
    { value: "chirurgie", label: "Chirurgie générale" },
    { value: "orthopedie", label: "Chirurgie orthopédique" },
    { value: "anesthesie", label: "Anesthésie-Réanimation" },
  ];
  const professions = [
    { value: "", label: "Choisissez une profession", disabled: true },
    { value: "enseignant", label: "Enseignant(e)" },
    { value: "etudiant", label: "Étudiant(e)" },
    { value: "medecin", label: "Médecin" },
    { value: "infirmier", label: "Infirmier / Infirmière" },
    { value: "fonctionnaire", label: "Fonctionnaire" },
    { value: "cadre", label: "Cadre" },
    { value: "ouvrier", label: "Ouvrier / Ouvrière" },
    { value: "commercant", label: "Commerçant(e)" },
    { value: "artisan", label: "Artisan" },
    { value: "agriculteur", label: "Agriculteur / Agricultrice" },
    { value: "chauffeur", label: "Chauffeur / Conducteur" },
    { value: "agent_securite", label: "Agent de sécurité" },
    { value: "serveur", label: "Serveur / Serveuse" },
    { value: "retraite", label: "Retraité(e)" },
    { value: "sans_emploi", label: "Sans emploi" },
    { value: "autre", label: "Autre" },
  ];
  // ✅ Tri alphabétique par label
  const sortedSpecialites = specialites.sort((a, b) =>
    a.label.localeCompare(b.label)
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

  // Imprimer (ouvre une fenêtre d'impression)

  const handlePrintSafe = () => {
    if (!tableRef.current) {
      alert("Table reference not ready");
      return;
    }
    handlePrint();
  };
  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    onBeforeGetContent: () => {
      return new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
    },
  });

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

  const allColumns = [
    {
      name: "Nom Et Prénom",
      selector: (row) => row.nom,
      sortable: true,
      id: "nom",
      hideBelow768: false, // toujours visible
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      id: "Email",
      hideBelow768: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
      id: "Role",
      hideBelow768: true,
    },
    {
      name: "Actions",
      id: "Actions",
      cell: (row) => (
        <div>
          <a
            href="javascript:void(0);"
            className="btn btn-sm btn-icon btn-outline-danger rounded-circle mr-1"
            title="Annuler RDV"
          >
            <i className="fal fa-times" />
          </a>
          <div className="dropdown d-inline-block dropleft ">
            <a
              href="#"
              className="btn btn-sm btn-icon btn-outline-primary rounded-circle shadow-0"
              data-toggle="dropdown"
              aria-expanded="true"
              title="Plus options"
            >
              <i className="fal fa-ellipsis-v" />
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="javascript:void(0);">
                Changer Rdv
              </a>
              <a className="dropdown-item" href="javascript:void(0);">
                Valider RDV
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

  // 👇 Options pour react-select
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
  const groupesSanguins = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const allSelected = selectedOptions.length === selectOptions.length;
  const ExpandedComponent = ({ data }) => (
    <div style={styles.card}>
      <p>
        <strong>🧍 Nom :</strong> {data.nom}
      </p>
      <p>
        <strong>✉️ Email :</strong> {data.email}
      </p>
      <p>
        <strong>📞 Profil :</strong> {data.role}
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
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [showAutreField, setShowAutreField] = useState(false);
  const [autreText, setAutreText] = useState("");

  const handleChange = (selected) => {
    const selectedValues = selected ? selected.map((opt) => opt.value) : [];

    // Si "aucune" est sélectionné, on l'isole
    if (selectedValues.includes("aucune")) {
      setSelectedAllergies([{ value: "aucune", label: "Aucune allergie connue" }]);
      setShowAutreField(false);
      setAutreText("");
    } else {
      setSelectedAllergies(selected || []);
      setShowAutreField(selectedValues.includes("autre"));
    }
  };

  // Sauvegarde des valeurs sélectionnées (tableau simple)
  const selectedValuesArray = selectedAllergies.map((opt) => opt.value);
  if (showAutreField && autreText.trim()) {
    selectedValuesArray.push(autreText.trim());
  }

  // (Tu peux maintenant envoyer selectedValuesArray dans une requête POST ou l’enregistrer)
  const [selectedPathologies, setSelectedPathologies] = useState([]);
  const [showAutreInput, setShowAutreInput] = useState(false);
  const [autreText2, setAutreText2] = useState("");

  const handleChange2 = (selected) => {
    const selectedValues = selected ? selected.map((opt) => opt.value) : [];

    // Si "aucune" est sélectionné, on bloque les autres
    if (selectedValues.includes("aucune")) {
      setSelectedPathologies([
        { value: "aucune", label: "Aucune pathologie chronique" },
      ]);
      setShowAutreInput(false);
      setAutreText2("");
    } else {
      setSelectedPathologies(selected || []);
      setShowAutreInput(selectedValues.includes("autre"));
    }
  };

  // Final values to be saved
  const finalPathologiesArray = selectedPathologies.map((opt) => opt.value);
  if (showAutreInput && autreText2.trim()) {
    finalPathologiesArray.push(autreText.trim());
  }
  
  return (
    <div>
      &lt;&gt;
      <ol className="breadcrumb page-breadcrumb">
        <li className="breadcrumb-item">
          <a href="javascript:void(0);">SmartCabinet</a>
        </li>
        <li className="breadcrumb-item">Gestion Users</li>

        <li className="position-absolute pos-top pos-right d-none d-sm-block">
          <span className="js-get-date" />
        </li>
      </ol>
      <div className="subheader">
        <h1 className="subheader-title">
          <i className="subheader-icon fal fa-" /> Gestion Des Utilisateurs
          <span className="fw-300"></span>{" "}
          <sup className="badge badge-danger fw-500">Privée</sup>
          <small></small>
        </h1>
        <div className="subheader-block">Right content of header</div>
      </div>
      <div className="alert alert-primary">
        <div className="d-flex flex-start w-100">
          <div className="mr-2 hidden-md-down">
            <span className="icon-stack icon-stack-lg">
              <i className="base base-6 icon-stack-3x opacity-100 color-primary-500" />
              <i className="base base-10 icon-stack-2x opacity-100 color-primary-300 fa-flip-vertical" />
              <i className="ni ni-blog-read icon-stack-1x opacity-100 color-white" />
            </span>
          </div>
          <div className="d-flex flex-fill">
            <div className="flex-fill">
              <span className="h5">About</span>
              <p>Points.</p>
              <p className="m-0">
                Find in-depth, guidelines, tutorials and more on Addon's{" "}
                <a href="#" target="_blank">
                  Official Documentation
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div id="panel-1" className="panel">
            <div className="panel-hdr">
              <h2>
                Liste Des Utilisateurs :{" "}
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
                <div className="d-flex justify-content-between">
                  <input
                    type="text"
                    placeholder="Rechercher par nom ou email"
                    className="form-control mb-3"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    style={{ maxWidth: 300 }}
                  />
                  <div>
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
                      className="btn btn-info mx-2"
                      onClick={handlePrintSafe}
                    >
                      Imprimer
                    </button>
                    <button
                      className="btn btn-success mx-2"
                      data-toggle="modal"
                      data-target=".default-example-modal-right"
                      onClick={handlePrintSafe}
                    >
                      Nouveau Utilisateur
                    </button>
                  </div>
                </div>
                <div className="d-flex">
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
              <h5 className="modal-title h4">Formulaire Utilisateur :</h5>
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
            <div className="modal-body">
              <div className="card mb-5">
                <div className="card-body p-3">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                      Nom et prénom :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <input
                        type="text"
                        aria-label="Prénom"
                        className="form-control"
                        placeholder="Prénom"
                        id="name-f"
                      />
                      <input
                        type="text"
                        aria-label="Nom"
                        className="form-control"
                        placeholder="Nom"
                        id="name-l"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-addon1">
                      E-mail
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input
                        type="text"
                        id="basic-addon1"
                        className="form-control"
                        placeholder="E-mail"
                        aria-label="E-mail"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-addon1">
                      Téléphone :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input
                        type="text"
                        id="basic-addon1"
                        className="form-control"
                        placeholder="Téléphone"
                        aria-label="E-mail"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-addon1">
                    CIN :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input
                        type="text"
                        id="basic-addon1"
                        className="form-control"
                        placeholder="CIN"
                        aria-label="E-mail"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-addon1">
                    Sexe :
                    </label>
                    <div className="demo">
                   <div className="custom-control custom-switch">
                        <input type="radio" className="custom-control-input" id="customSwitch1radio" name="defaultSwitchRadioExample" />
                        <label className="custom-control-label" htmlFor="customSwitch1radio">Femme</label>
                   </div>
                   <div className="custom-control custom-switch">
                        <input type="radio" className="custom-control-input" id="customSwitch2radio" defaultChecked name="defaultSwitchRadioExample" />
                        <label className="custom-control-label" htmlFor="customSwitch2radio">Homme</label>
                   </div>


                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="example-date">
                      Date De Naissance :
                    </label>
                    <input
                      className="form-control"
                      id="example-date"
                      type="date"
                      name="date"
                      defaultValue="2023-07-23"
                    />
                  </div>




                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                      Mot de passe :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <input
                        type="paswword"
                        aria-label="Mot de passe"
                        className="form-control"
                        placeholder="Mot de passe"
                        id="user"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                      Statut :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <select
                        className="custom-select"
                        id="usertype"
                        aria-label="usertype"
                      >
                        <option selected>Statut</option>
                        <option value={1}>Active</option>
                        <option value={2}>Désactive</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-url">
                      Adresse :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Adresse</span>
                      </div>
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-g">
                <div className="card-body p-3">
                  <h5 className="text-danger">
                    ADP System Migration
                    <small className="mt-0 mb-3 text-muted">
                      Migration of new API to local servers
                    </small>
                    <span className="badge badge-danger fw-n position-absolute pos-top pos-right mt-3 mr-3">
                      Delayed
                    </span>
                  </h5>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                      Role :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <select
                        className="custom-select"
                        id="usertype"
                        aria-label="usertype"
                      >
                        <option selected>Role</option>
                        <option value={1}>Medecin</option>
                        <option value={2}>Secretaire</option>
                        <option value={3}>Patient</option>
                        <option value={4}>MedecinAdmin</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-g">
                <div className="card-body p-3">
                  <h5 className="text-success">
                    Informations-Médecin
                    <small className="mt-0 mb-3 text-muted">
                    📌 Tous les champs sont obligatoires.
                    </small>
                    <span className="badge badge-success fw-n position-absolute pos-top pos-right mt-3 mr-3">
                    Médecin
                    </span>
                  </h5>
                  <div className="form-group">
                    <label className="form-label" htmlFor="example-date">
                      Date Début :
                    </label>
                    <input
                      className="form-control"
                      id="example-date"
                      type="date"
                      name="date"
                      defaultValue="2023-07-23"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                      Spécialité :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <select className="custom-select" id="specialite">
                        <option value="" selected disabled>
                          Choisir une spécialité
                        </option>
                        {sortedSpecialites.map((spec) => (
                          <option key={spec.value} value={spec.value}>
                            {spec.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-url">
                      Cabinet :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Cabinet</span>
                      </div>
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-g">
                <div className="card-body p-3">
                <h5 className="text-success">
                    Informations d’assistante médicale
                    <small className="mt-0 mb-3 text-muted">
                    📌 Tous les champs sont obligatoires.
                    </small>
                    <span className="badge badge-success fw-n position-absolute pos-top pos-right mt-3 mr-3">
                    Assistante
                    </span>
                  </h5>
                  <div className="form-group">
                    <label className="form-label" htmlFor="example-date">
                      Date d'Embauche :
                    </label>
                    <input
                      className="form-control"
                      id="example-date"
                      type="date"
                      name="date"
                      defaultValue="2023-07-23"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                      Niveau Etude :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <select className="custom-select" id="specialite">
                        <option value="" selected disabled>
                          Choisir un Niveau Etude :
                        </option>

                        <option value="Bac">Bac</option>
                        <option value="Bac + 1">Bac + 1</option>
                        <option value="Bac + 2">Bac + 2</option>
                        <option value="Bac + 3">Bac + 3</option>
                        <option value="Bac + 4">Bac + 4</option>
                        <option value="Bac + 5">Bac + 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                    Type De Contrat :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <select className="custom-select" id="specialite">
                        <option value="" selected disabled>
                          Choisir Type De Contrat :
                        </option>
                         /  / Intérimaire
                        <option value="CDI">CDI</option>
                        <option value="CDD">CDD</option>
                        <option value="Bac + 2">Intérimaire</option>
                        
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-url">
                      Salaire :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Salaire"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">DH</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-url">
                    Numéro Compte Bancaire :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Numéro Compte Bancaire"
                      />
                     
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-url">
                    Numéro CNSS :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">CNSS</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Numéro CNSS :"
                      />
                     
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="card mb-g">
                <div className="card-body p-3">
                <h5 className="text-success">
                    Informations Patient :
                    <small className="mt-0 mb-3 text-muted">
                    📌 Tous les champs sont obligatoires.
                    </small>
                    <span className="badge badge-success fw-n position-absolute pos-top pos-right mt-3 mr-3">
                    Patient
                    </span>
                  </h5>
                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-url">
                    Numéro De Dossier :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Numéro De Dossier"
                      />
                     
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                    Profession :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <select className="custom-select" id="specialite">
                        <option value="" selected disabled>
                          Choisir Profession :
                        </option>

                        {professions.map((option) => (
    <option
      key={option.value}
      value={option.value}
      disabled={option.disabled}
      selected={option.disabled}
    >
      {option.label}
    </option>
  ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                    Groupe Sanguin :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <select className="custom-select" id="specialite">
                      <option value="" disabled selected>
    Choisissez un groupe sanguin
  </option>
  {groupesSanguins.map((groupe) => (
    <option key={groupe} value={groupe}>
      {groupe}
    </option>
  ))}
                        
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                    Allergies Connues :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <Select
        isMulti
        options={allergieOptions}
        value={selectedAllergies}
        onChange={handleChange}
        placeholder="Sélectionnez les allergies connues..."
        className="basic-multi-select"
        classNamePrefix="select"
        isOptionDisabled={(option) =>
          selectedAllergies.some((sel) => sel.value === "aucune") &&
          option.value !== "aucune"
        }
      />

      
                    </div>
                    {showAutreField && (
        <div className="mt-2">
          
          <label htmlFor="autreAllergie">Précisez l'allergie :</label>
          <input
            type="text"
            id="autreAllergie"
            className="form-control"
            placeholder="Entrez une allergie non listée"
            value={autreText}
            onChange={(e) => setAutreText(e.target.value)}
          />
        </div>
      )}

      <div className="mt-3">
        <strong>Valeurs enregistrées :</strong>
        <pre>{JSON.stringify(selectedValuesArray, null, 2)}</pre>
      </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                    Pathologies chroniques :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <Select
        isMulti
        options={pathologiesOptions}
        value={selectedPathologies}
        onChange={handleChange2}
        placeholder="Sélectionnez les pathologies chroniques..."
        className="basic-multi-select"
        classNamePrefix="select"
        isOptionDisabled={(option) =>
          selectedPathologies.some((sel) => sel.value === "aucune") &&
          option.value !== "aucune"
        }
      />

      
                    </div>
                    {showAutreInput && (
        <div className="mt-2">
          <label htmlFor="autrePathologie">Précisez :</label>
          <input
            type="text"
            id="autrePathologie"
            className="form-control"
            placeholder="Entrez une pathologie non listée"
            value={autreText2}
            onChange={(e) => setAutreText2(e.target.value)}
          />
        </div>
      )}

      <div className="mt-3">
        <strong>Valeurs enregistrées :</strong>
        <pre>{JSON.stringify(finalPathologiesArray, null, 2)}</pre>
      </div>
   
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-url">
                      Salaire :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Salaire"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">DH</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-url">
                    Mutuelle / Assurance :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Mutuelle / Assurance"
                      />
                     
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="basic-url">
                    Numéro De Sécurite Sociale :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">NSS</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Numéro De Sécurite Sociale"
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
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Left Transparent*/}
    </div>
  );
};

export default Users;
