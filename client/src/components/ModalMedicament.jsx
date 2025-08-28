import React, { useState, useEffect } from "react";
import axios from "axios";

const ModalMedicament = ({ show, onClose,Onsave, medicamentToEdit }) => {
  const [formData, setFormData] = useState({
    codecip: '',
    nomcommercial: ''
  });

  // Pré-remplir si medicamentToEdit existe (mode édition)
  useEffect(() => {
    if (medicamentToEdit) {
      setFormData({
        codecip: medicamentToEdit.codecip || '',
        nomcommercial: medicamentToEdit.nomcommercial || ''
      });
    } else {
      // réinitialiser si on change de mode
      setFormData({
        codecip: '',
        nomcommercial: ''
      });
    }
  }, [medicamentToEdit]);

  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [show]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      codecip: formData.codecip,
      nomcommercial: formData.nomcommercial
    };

    try {
      let response;

      if (medicamentToEdit && medicamentToEdit._id) {
        // ✅ Mode mise à jour
        response = await axios.put(`http://localhost:5000/api/medicaments/${medicamentToEdit._id}`, payload);
        alert('Médicament mis à jour avec succès !');
        Onsave();
      } else {
        // ✅ Mode création
        response = await axios.post('http://localhost:5000/api/medicaments', payload);
        alert('Médicament ajouté avec succès !');
        Onsave();
      }

      setFormData({ codecip: '', nomcommercial: '' });
      onClose(); // Ferme le modal

    } catch (error) {
      console.error('Erreur lors de la requête :', error);
      alert('Erreur lors de l’enregistrement du médicament.');
    }
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-right">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {medicamentToEdit ? 'Modifier le Médicament' : 'Ajouter un Médicament'}
            </h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label>Code CIP :</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Code CIP"
                    name="codecip"
                    value={formData.codecip}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Nom Commercial :</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nom Commercial"
                    name="nomcommercial"
                    value={formData.nomcommercial}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Fermer
              </button>
              <button type="submit" className="btn btn-primary">
                {medicamentToEdit && medicamentToEdit._id ? 'Mettre à jour' : 'Enregistrer'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalMedicament;
