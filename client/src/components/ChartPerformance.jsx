
import React, { Component, useState,useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "./Statistique";
const chartSetting = {
  yAxis: [
    {
      label: "Les Valeurs",
      width: 60,
    },
  ],
  height: 300,
};
const ChartPerformance = () => {
  return (
  <div id="js-checkbox-toggles" className="d-flex mb-3">
                <BarChart
                  dataset={dataset}
                  xAxis={[{ dataKey: "month" }]}
                  series={[
                    {
                      dataKey: "Nombre_RDV",
                      label: "Nombre_RDV",
                      valueFormatter,
                    },
                    {
                      dataKey: "Consultations",
                      label: "Consultations",
                      valueFormatter,
                    },
                    {
                      dataKey: "Nouveaux_Patients",
                      label: "Nouveaux_Patients",
                      valueFormatter,
                    },
                    {
                      dataKey: "RDV_Non_honorés",
                      label: "RDV_Non_honorés",
                      valueFormatter,
                    },
                  ]}
                  {...chartSetting}
                />
              </div>
  )
}

export default ChartPerformance
