import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import DataTable from 'react-data-table-component';

import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';



const Users = ({ users, refreshUsers }) => {
    const [filterText, setFilterText] = useState('');
    const [copied, setCopied] = useState(false);
    
    const tableRef = useRef(null);

  
    // Filtrer les données
    const filteredItems = users.filter(
      item =>
        item.nom.toLowerCase().includes(filterText.toLowerCase()) ||
        item.email.toLowerCase().includes(filterText.toLowerCase())
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
    
      const tableColumn = columns.map(col => col.name);
      const tableRows = filteredItems.map(item => [
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
  <a href="javascript:void(0);" className="btn btn-sm btn-icon btn-outline-danger rounded-circle mr-1" title="Annuler RDV">
    <i className="fal fa-times" />
  </a>
  <div className="dropdown d-inline-block dropleft ">
    <a href="#"  className="btn btn-sm btn-icon btn-outline-primary rounded-circle shadow-0" data-toggle="dropdown" aria-expanded="true" title="Plus options">
      <i className="fal fa-ellipsis-v" />
    </a>
    <div className="dropdown-menu">
      <a className="dropdown-item" href="javascript:void(0);">Changer Rdv</a>
      <a className="dropdown-item" href="javascript:void(0);">Valider RDV</a>
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
        borderRadius: '10px',
        border: '1px solid #dee2e6',
        overflow: 'hidden',
      },
    },
    headRow: {
        style: {
          backgroundColor: '#003c8f', // bleu foncé
          color: '#fff',
          fontSize: '14px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }
      },
    headCells: {
      style: {
        paddingLeft: '16px',
        paddingRight: '16px',
      },
    },
    rows: {
      style: {
        backgroundColor: '#fff',
        borderBottom: '1px solid #dee2e6',
        minHeight: '50px',
        '&:hover': {
          backgroundColor: '#f8f9fa',
        },
      },
    },
    cells: {
      style: {
        paddingLeft: '16px',
        paddingRight: '16px',
        fontSize: '15px',
      },
    },
    pagination: {
      style: {
        borderTop: '1px solid #dee2e6',
        padding: '8px',
      },
    },
  };
      
   
  return (
   <div>
  &lt;&gt;
  <ol className="breadcrumb page-breadcrumb">
    <li className="breadcrumb-item"><a href="javascript:void(0);">SmartCabinet</a></li>
    <li className="breadcrumb-item">Gestion Users</li>
    
    <li className="position-absolute pos-top pos-right d-none d-sm-block"><span className="js-get-date" /></li>
  </ol>
  <div className="subheader">
    <h1 className="subheader-title">
      <i className="subheader-icon fal fa-" /> Gestion Des Utilisateurs<span className="fw-300"></span> <sup className="badge badge-danger fw-500">Privée</sup>
      <small>
       
      </small>
    </h1>
    <div className="subheader-block">
      Right content of header
    </div>
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
            Find in-depth, guidelines, tutorials and more on Addon's <a href="#" target="_blank">Official Documentation</a>
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
            Liste Des Utilisateurs : <span className="fw-300"><i>Title</i></span>
          </h2>
          <div className="panel-toolbar">
            <button className="btn btn-panel" data-action="panel-collapse" data-toggle="tooltip" data-offset="0,10" data-original-title="Collapse" />
            <button className="btn btn-panel" data-action="panel-fullscreen" data-toggle="tooltip" data-offset="0,10" data-original-title="Fullscreen" />
            <button className="btn btn-panel" data-action="panel-close" data-toggle="tooltip" data-offset="0,10" data-original-title="Close" />
          </div>
        </div>
        <div className="panel-container show">
          <div className="panel-content">
            
          <input
        type="text"
        placeholder="Rechercher par nom ou email"
        className="form-control mb-3"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        style={{ maxWidth: 300 }}
      />

      <div style={{ marginBottom: '10px' }}>
        <button className="btn btn-primary me-2" onClick={exportExcel}>Exporter Excel</button>
        <button className="btn btn-danger me-2" onClick={exportPDF}>Exporter PDF</button>

     

        <button className="btn btn-info" onClick={handlePrintSafe}>Imprimer</button>
      </div>
      
              <div ref={tableRef}>
                <DataTable
                  columns={columns}
                  data={filteredItems}
                  pagination
                  highlightOnHover
                  responsive
                  noDataComponent="Aucun utilisateur à afficher"
                />
              </div>  
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Users