import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserForm({ onUserCreated }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: 'admin',
    nom: '',
    email: '',
    password: '',
    permissions: '',
    specialite: '',
    patients: '',
    bureau: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      role: formData.role,
      nom: formData.nom,
      email: formData.email,
      password: formData.password,
    };

    // Ajout des champs selon rôle
    if (formData.role === 'admin') {
      payload.permissions = formData.permissions.split(',').map(s => s.trim());
    } else if (formData.role === 'medecin') {
      payload.specialite = formData.specialite;
      payload.patients = formData.patients.split(',').map(s => s.trim());
    } else if (formData.role === 'secretaire') {
      payload.bureau = formData.bureau;
    } else if (formData.role === 'medecin_admin') {
      payload.specialite = formData.specialite;
      payload.patients = formData.patients.split(',').map(s => s.trim());
      payload.permissions = formData.permissions.split(',').map(s => s.trim());
    }

    const res = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert('Utilisateur créé !');
      setFormData({
        role: 'admin',
        nom: '',
        email: '',
        password: '',
        permissions: '',
        specialite: '',
        patients: '',
        bureau: ''
      });
      onUserCreated();
     
      navigate('/');
    } else {
      alert('Erreur création utilisateur');
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <label>
        Rôle:
        <select name="role" className="form-control" value={formData.role} onChange={handleChange}>
          <option value="admin">Admin</option>
          <option value="medecin">Médecin</option>
          <option value="secretaire">Secrétaire</option>
          <option value="medecin_admin">Médecin Admin</option>
        </select>
      </label>
      <br />
      <label>
        Nom:
        <input type="text" className="form-control" name="nom" value={formData.nom} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <br />
      <label>
        Mot de passe:
        <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
      </label>
      <br />

      {/* Champs spécifiques selon rôle */}
      {(formData.role === 'admin' || formData.role === 'medecin_admin') && (
        <>
          <label>
            Permissions (séparées par des virgules) :
            <input className="form-control" type="text" name="permissions" value={formData.permissions} onChange={handleChange} />
          </label>
          <br />
        </>
      )}

      {(formData.role === 'medecin' || formData.role === 'medecin_admin') && (
        <>
          <label>
            Spécialité:
            <input className="form-control" type="text" name="specialite" value={formData.specialite} onChange={handleChange} />
          </label>
          <br />
          <label>
            Patients (séparés par des virgules) :
            <input className="form-control" type="text" name="patients" value={formData.patients} onChange={handleChange} />
          </label>
          <br />
        </>
      )}

      {formData.role === 'secretaire' && (
        <>
          <label>
            Bureau:
            <input type="text" className="form-control" name="bureau" value={formData.bureau} onChange={handleChange} />
          </label>
          <br />
        </>
      )}

      <button type="submit" className="btn btn-outline-primary">Créer utilisateur</button>
    </form>
  );
}
