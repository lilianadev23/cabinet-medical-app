import React from 'react'



import DataTable from 'react-data-table-component';

const CustomStyles = {
  table: {
    style: {
      borderRadius: '10px',
      border: '1px solid #dee2e6',
      overflow: 'hidden',
    },
  },
  head: {
    style: {
      backgroundColor: '#0d6efd',
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      minHeight: '56px',
    },
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
        backgroundColor: '#f1f1f1',
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

export default CustomStyles;
