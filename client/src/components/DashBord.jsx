import React, { Component, useState,useEffect } from "react";
import ChartPerformance from './ChartPerformance'
import Agendainteractif from "./Agendainteractif";
import VueComparative from "./Vuecomparative";
import RepartitionPaiements from "./RepartitionPaiements";
import ListeRendezVous from "./ListeRendezvous";
import "moment/locale/fr";
import "react-tooltip/dist/react-tooltip.css"; // ✅ CSS pour react-tooltip
import "react-big-calendar/lib/css/react-big-calendar.css"; // ✅ CSS pour calendrier
import { format, parse, startOfWeek, getDay } from "date-fns";
import fr from "date-fns/locale/fr";


const DashBord = () => {
  const [heureActuelle, setHeureActuelle] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHeureActuelle(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dateFormatee = format(heureActuelle, "EEEE d MMMM yyyy", { locale: fr });
  const heureFormatee = format(heureActuelle, "HH:mm:ss");

    
  return (
    <>
      <ol className="breadcrumb page-breadcrumb">
        <li className="breadcrumb-item">
          <a href="javascript:void(0);">SmartCabinet</a>
        </li>
        <li className="breadcrumb-item">Cabinet</li>
        <li className="breadcrumb-item active">Dashboard</li>
        <li className="position-absolute pos-top pos-right d-none d-sm-block">
          <span className="js-get-date" />
        </li>
      </ol>
      <div className="subheader">
        <h1 className="subheader-title">
          <i className="subheader-icon fal fa-chart-area" /> Dashboard{" "}
          <span className="fw-300"></span>
        </h1>
        <div className="d-flex mr-4">
          <div>
            <label className="fs-sm mb-0 mt-2 mt-md-0">
            Aujourd’hui :
            </label>
            <h4 className="font-weight-bold mb-0">{dateFormatee.charAt(0).toUpperCase() + dateFormatee.slice(1)}</h4>
          </div>
        </div>
        <div className="d-flex mr-0">
          <div>
            <label className="fs-sm mb-0 mt-2 mt-md-0">Horloge du cabinet :</label>
            <h4 className="font-weight-bold mb-0">{heureFormatee}</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-3">
          <div className="p-3 bg-primary-300 rounded overflow-hidden position-relative text-white mb-g">
            <div className>
              <h3 className="display-4 d-block l-h-n m-0 fw-500">
                12
                <small className="m-0 l-h-n fw-500">
                  Nombre de RDV aujourd’hui
                </small>
              </h3>
            </div>
            <i
              className="fal fa-user position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n1"
              style={{ fontSize: "6rem" }}
            />
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="p-3 bg-warning-400 rounded overflow-hidden position-relative text-white mb-g">
            <div className>
              <h3 className="display-4 d-block l-h-n m-0 fw-500">
                9/12
                <small className="m-0 l-h-n fw-500">Patients attendus</small>
              </h3>
            </div>
            <i
              className="fal fa-gem position-absolute pos-right pos-bottom opacity-15  mb-n1 mr-n4"
              style={{ fontSize: "6rem" }}
            />
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="p-3 bg-success-200 rounded overflow-hidden position-relative text-white mb-g">
            <div className>
              <h3 className="display-4 d-block l-h-n m-0 fw-500">
                15 000 DH
                <small className="m-0 l-h-n fw-500">
                Encaissements du jour
                </small>
              </h3>
            </div>
            <i
              className="fal fa-lightbulb position-absolute pos-right pos-bottom opacity-15 mb-n5 mr-n6"
              style={{ fontSize: "8rem" }}
            />
          </div>
        </div>
        <div className="col-sm-6 col-xl-3">
          <div className="p-3 bg-info-200 rounded overflow-hidden position-relative text-white mb-g">
            <div className>
              <h3 className="display-4 d-block l-h-n m-0 fw-500">
              30 000 DH
                <small className="m-0 l-h-n fw-500">Chiffre d'affaires mensuel</small>
              </h3>
            </div>
            <i
              className="fal fa-globe position-absolute pos-right pos-bottom opacity-15 mb-n1 mr-n4"
              style={{ fontSize: "6rem" }}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div id="panel-1" className="panel">
            <div className="panel-hdr">
              <h2>Performance du cabinet (patients & RDV) :</h2>
            </div>
            <div className="panel-container show">
              <div className="panel-content bg-subtlelight-fade">
               
                <ChartPerformance />
              </div>
            </div>
          </div>
        </div>


        <div className="col-lg-8">
          <div
            id="panel-2"
            className="panel panel-locked"
            data-panel-sortable
            data-panel-collapsed
            data-panel-close
          >
            <div className="panel-hdr">
              <h2>
              Agenda interactif des rendez-vous :{" "}
                <span className="fw-300">
                  <i></i>
                </span>
              </h2>
            </div>
            <div className="panel-container show">
              <div className="panel-content poisition-relative">
               <Agendainteractif/> 
            
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">

          <div className="row">
            <VueComparative/> 
         </div>

         <div className="col-lg-12">
            <RepartitionPaiements/>
          </div>

        </div>


      </div>
<div className="row">
<div className="col-lg-12">
         
          <ListeRendezVous/>
             
           </div>
</div>

        
            
                     
      
    </>
  );
};

export default DashBord;
