import React, { useState, useEffect } from "react";

const ModalSalle = ({ isOpen, onClose, onSave, salle }) => {
  const [nom, setNom] = useState("");
  const [capacite, setCapacite] = useState("");
  const [statut, setStatut] = useState("disponible");

  useEffect(() => {
    if (salle) {
      setNom(salle.nom || "");
      setCapacite(salle.capacite?.toString() || "");
      setStatut(salle.statut || "disponible");
    } else {
      setNom("");
      setCapacite("");
      setStatut("disponible");
    }
  }, [salle, isOpen]); // Ajoutez isOpen pour reset à chaque ouverture

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!nom.trim() || !capacite) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const newSalle = {
      _id: salle ? salle._id : undefined, // Pour l'update
      nom: nom.trim(),
      capacite: parseInt(capacite),
      statut,
    };
    
    onSave(newSalle);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {salle ? "Modifier la salle" : "Ajouter une salle"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nom *</label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full border p-2 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Capacité *</label>
            <input
              type="number"
              min="1"
              value={capacite}
              onChange={(e) => setCapacite(e.target.value)}
              className="w-full border p-2 rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Statut</label>
            <select
              value={statut}
              onChange={(e) => setStatut(e.target.value)}
              className="w-full border p-2 rounded-lg"
            >
              <option value="disponible">Disponible</option>
              <option value="occupée">Occupée</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              {salle ? "Mettre à jour" : "Ajouter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalSalle;