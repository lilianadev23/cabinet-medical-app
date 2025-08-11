// RepartitionPaiements.js
import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const RepartitionPaiements = () => {
  const uData = [20000];
  const yData = [100000];
  const xData = [30000];
  const zData = [50000];

  const xLabels = ["Mois En Cours"];

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
            Répartition des paiements : encaissés, impayés, en attente :{" "}
            <span className="fw-300">
              <i>Mois En Cours</i>
            </span>
          </h2>
        </div>
        <div className="panel-container show">
          <div className="panel-content poisition-relative">
            <BarChart
              height={300}
              series={[
                { data: yData, label: "Chiffre Affaires", id: "uvId" },
                { data: uData, label: "Montant Encaissé", id: "uvId2" },
                { data: zData, label: "Montant Impayés", id: "uvId3" },
                { data: xData, label: "Montant En attente", id: "uvId4" },
              ]}
              xAxis={[{ data: xLabels }]}
              yAxis={[{ width: 50 }]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepartitionPaiements;
