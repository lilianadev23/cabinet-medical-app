
import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const VueComparative = () => {
  return (
    <div className="col-lg-12">
      <div
        id="panel-3"
        className="panel panel-locked"
        data-panel-sortable
        data-panel-collapsed
        data-panel-close
      >
        <div className="panel-hdr">
          <h2>
            Vue comparative des recettes par médecin :{" "}
            <span className="fw-300">
              <i>Mois En Cours</i>
            </span>
          </h2>
        </div>
        <div className="panel-container show">
          <div className="panel-content poisition-relative">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 150000, label: "Chiffre Affaires" },
                    { id: 1, value: 70000, label: "Médecin 1" },
                    { id: 2, value: 30000, label: "Médecin 2" },
                    { id: 3, value: 50000, label: "Médecin 3" },
                  ],
                  arcLabel: "value",
                },
              ]}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VueComparative;
