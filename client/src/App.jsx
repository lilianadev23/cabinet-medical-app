import { useState, useEffect } from 'react';
import UserList from './pages/UserList';
import UserForm from './pages/UserForm';

import HomeMA from './MedcinAdmin/HomeMA';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserEditForm from "./pages/UserEditForm";

export default function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/api/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (

    <>
    <HomeMA  />
    </>
    
  );
}
