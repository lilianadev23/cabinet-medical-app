import React, { useState, useEffect } from "react";
import axios from "axios";

const ModalRendezVous = ({ show, onClose,Onsave, medicamentToEdit,users,salles }) => {
    const [selectedTime, setSelectedTime] = useState("");
    const [salle, setsalles] = useState(salles);
    const [formData, setFormData] = useState({
      dateRDV: '',
      heureRDV: '',
      patient: '',
      medecin: '',
      salle: '',
      statut: 'planifié' // ✅ valeur par défaut valide
    });
      const patients = users.filter((u) => u.role === "patient");
      const medcin = users.filter((u) => u.role === "medecin");
    
       // Génération automatique des horaires
  const generateTimeSlots = (start, end, step) => {
    const times = [];
    let current = new Date();
    current.setHours(start, 0, 0, 0);
    const endTime = new Date();
    endTime.setHours(end, 0, 0, 0);

    while (current <= endTime) {
      const hours = current.getHours().toString().padStart(2, "0");
      const minutes = current.getMinutes().toString().padStart(2, "0");
      times.push(`${hours}:${minutes}`);
      current.setMinutes(current.getMinutes() + step);
    }

    return times;
  };

  const timeSlots = generateTimeSlots(9, 18, 30); // de 9h à 18h, pas de 30min
      // Pré-remplir si medicamentToEdit existe (mode édition)
      useEffect(() => {
        if (medicamentToEdit) {
          const formatDate = (isoString) => {
            if (!isoString) return '';
            return new Date(isoString).toISOString().split('T')[0]; // → "2025-09-11"
          };
          setFormData({
            dateRDV: formatDate(medicamentToEdit.dateRDV) || '',
            heureRDV: medicamentToEdit.heureRDV || '',
            patient: medicamentToEdit.patient?._id || '',
            medecin: medicamentToEdit.medecin?._id || '',
            salle: medicamentToEdit.salle?._id  || '',
            statut: medicamentToEdit.statut || 'planifié',
            
          });
        } else {
          // réinitialiser si on change de mode
          setFormData({
            dateRDV: '',
            heureRDV: '',
            patient: '',
            medecin: '',
            salle: '',
            statut: 'disponible' // valeur par défaut correspondant au schéma
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
    
        const payload = { dateRDV: formData.dateRDV,
          heureRDV: formData.heureRDV,
          patient: formData.patient,
          medecin: formData.medecin,
          salle: formData.salle,
          ...(formData.statut && { statut: formData.statut }) };
        console.log(payload);
    
        try {
          let response;
    
          if (medicamentToEdit && medicamentToEdit._id) {
            // ✅ Mode mise à jour
            response = await axios.put(`http://localhost:5000/api/rendezVous/${medicamentToEdit._id}`, payload);
            alert('Rendez Vous mis à jour avec succès !');
            Onsave();
          } else {
            // ✅ Mode création
            response = await axios.post('http://localhost:5000/api/rendezVous', payload);
            alert('Rendez Vous ajouté avec succès !');
            Onsave();
          }
    
          setFormData({  dateRDV:  '',
          heureRDV:  '',
          patient: '',
          medecin:  '',
          salle:  '',
          statut:  '' });
          onClose(); // Ferme le modal
    
        } catch (error) {
          console.error('Erreur lors de la requête :', error);
          alert('Erreur lors de l’enregistrement du Rendez Vous.');
        }
      };
    
      if (!show) return null;
    
      return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-right">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {medicamentToEdit ? 'Modifier le Rendez-Vous' : 'Ajouter un Rendez-Vous'}
                </h5>
                <button type="button" className="close" onClick={onClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
    
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                      Patient :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <select
                        className="custom-select"
                        id="patient"
                        aria-label="usertype"
                        name="patient" 
                        value={formData.patient} 
                        onChange={handleChange}
                      >
                        <option value="">-- Sélectionner un patient --</option>
                        {patients.map((p) => (
                            <option key={p._id} value={p._id}>
                            {p.nom} {p.prenom}
                            </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                      Médcin :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <select
                        className="custom-select"
                        id="medecin"
                        aria-label="medecin"
                        name="medecin" 
                        value={formData.medecin} 
                        onChange={handleChange}
                      >
                        <option value="">-- Sélectionner un médcin --</option>
                        {medcin.map((p) => (
                            <option key={p._id} value={p._id}>
                            {p.nom} {p.prenom}
                            </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name-f">
                      Salle :
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text text-success">
                          <i className="ni ni-user fs-xl" />
                        </span>
                      </div>
                      <select
                        className="custom-select"
                        id="salle"
                        aria-label="salle"
                        name="salle" 
                        value={formData.salle} 
                        onChange={handleChange}
                      >
                        <option value="">-- Sélectionner Une Salle --</option>
                        {salles.map((p) => (
                            <option key={p._id} value={p._id}>
                            {p.nom} 
                            </option>
                        ))}
                      </select>
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
                        id="statut"
                        aria-label="statut"
                        name="statut" 
                        value={formData.statut} 
                        onChange={handleChange}
                      >
                       
                        <option value="planifié" selected>planifié</option>
                        <option value="annulé">annulé</option>
                        <option value="terminé">terminé</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="example-date">
                      Date De RDV :
                    </label>
                    <input
                      className="form-control"
                      id="dateRDV"
                      type="date"
                      
                      defaultValue=""
                      name="dateRDV" 
                        value={formData.dateRDV} 
                        onChange={handleChange}
                    />
                  </div>

                  <div class="form-group">
                   <label className="form-label" for="example-time-2">Heure De RDV :</label>
                   <select
                        className="form-control"
                        value={formData.heureRDV}
                        onChange={handleChange}
                        id="heureRDV" name="heureRDV">
                        <option value="">-- Choisir une heure --</option>
                        {timeSlots.map((time) => (
                            <option key={time} value={time}>
                            {time}
                            </option>
      ))}
    </select>
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
}

export default ModalRendezVous