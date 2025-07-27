import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import UserEditForm from "./components/UserEditForm";

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

    <div className="container">
    
     <Menu />
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<UserList users={users} refreshUsers={fetchUsers} />} > </Route>
    <Route path='/createuser' element={  <UserForm onUserCreated={fetchUsers} />} > </Route>
    <Route path='/edituser' element={  <UserEditForm user={users} onUpdated={fetchUsers} />} > </Route>
    </Routes>
    </BrowserRouter>
       
    </div>
    
  );
}
