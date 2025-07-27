import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserEditForm({ user, onUpdated }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: user.role || 'admin',
    nom: user.nom || '',
    email: user.email || '',
    password: '',  // Ne pas pré-remplir le mdp pour sécurité
    permissions: user.permissions ? user.permissions.join(', ') : '',
    specialite: user.specialite || '',
    patients: user.patients ? user.patients.join(', ') : '',
    bureau: user.bureau || ''
  });

  useEffect(() => {
    setFormData({
      role: user.role || 'admin',
      nom: user.nom || '',
      email: user.email || '',
      password: '',
      permissions: user.permissions ? user.permissions.join(', ') : '',
      specialite: user.specialite || '',
      patients: user.patients ? user.patients.join(', ') : '',
      bureau: user.bureau || ''
    });
  }, [user]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      role: formData.role,
      nom: formData.nom,
      email: formData.email,
    };

    // Mettre le password uniquement s'il est rempli (pour ne pas écraser)
    if (formData.password) payload.password = formData.password;

    // Champs spécifiques
    if (formData.role === 'admin' || formData.role === 'medecin_admin') {
      payload.permissions = formData.permissions.split(',').map(s => s.trim());
    }
    if (formData.role === 'medecin' || formData.role === 'medecin_admin') {
      payload.specialite = formData.specialite;
      payload.patients = formData.patients.split(',').map(s => s.trim());
    }
    if (formData.role === 'secretaire') {
      payload.bureau = formData.bureau;
    }

    const res = await fetch(`http://localhost:5000/api/users/${user._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert('Utilisateur mis à jour !');
      onUpdated();
    } else {
      alert('Erreur lors de la mise à jour');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: 10, marginTop: 10 }}>
      <h3>Modifier l'utilisateur {user.nom}</h3>
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
        Nouveau mot de passe (laisser vide pour ne pas changer):
        <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />

      {(formData.role === 'admin' || formData.role === 'medecin_admin') && (
        <>
          <label>
            Permissions (séparées par des virgules) :
            <input type="text" className="form-control" name="permissions" value={formData.permissions} onChange={handleChange} />
          </label>
          <br />
        </>
      )}

      {(formData.role === 'medecin' || formData.role === 'medecin_admin') && (
        <>
          <label>
            Spécialité:
            <input type="text" className="form-control" name="specialite" value={formData.specialite} onChange={handleChange} />
          </label>
          <br />
          <label>
            Patients (séparés par des virgules) :
            <input type="text" className="form-control" name="patients" value={formData.patients} onChange={handleChange} />
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

      <button type="submit">Mettre à jour</button>
      <button type="button"  style={{ marginLeft: 10 }}>Annuler</button>
    </form>
  );
}
