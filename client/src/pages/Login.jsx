import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({connected,setconnected}) {
  const [formData, setFormData] = useState({ email: '', motdepasse: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
console.log(formData)
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // ✅ Redirection selon le rôle
      switch (user.role) {
        case 'medecin_admin':
            setconnected(true);
          navigate('/home-ma');
          break;
        case 'secretaire':
            setconnected(true);
          navigate('/dashboard-secretariat');
          break;
        default:
            setconnected(true);
          navigate('/home');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Erreur de connexion');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Connexion</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email :</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mot de passe :</label>
          <input
            type="password"
            name="motdepasse"
            className="form-control"
            value={formData.motdepasse}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
