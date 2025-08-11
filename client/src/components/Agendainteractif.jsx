// 📁 src/components/Agenda.js
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { Tooltip } from "react-tooltip";
import { format, parse, startOfWeek, getDay } from "date-fns";
import fr from "date-fns/locale/fr";
import moment from "moment";
import "moment/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-tooltip/dist/react-tooltip.css";

const locales = { fr };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: fr }),
  getDay,
  locales,
});

const Agendainteractif = () => {
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());

  const myEvents = [
    {
      title: "Réunion",
      start: new Date(2025, 7, 8, 10, 0),
      end: new Date(2025, 7, 8, 11, 0),
      color: "#ff7f50",
      description: "Réunion avec l’équipe marketing, salle 301.",
    },
    {
      title: "Projet",
      start: new Date(2025, 7, 9, 14, 0),
      end: new Date(2025, 7, 9, 15, 30),
      color: "#87ceeb",
      description: "Présentation du projet au client final.",
    },
  ];

  const messagesFr = {
    date: "Date",
    time: "Heure",
    event: "Événement",
    allDay: "Toute la journée",
    week: "Semaine",
    work_week: "Semaine de travail",
    day: "Jour",
    month: "Mois",
    previous: "Précédent",
    next: "Suivant",
    yesterday: "Hier",
    tomorrow: "Demain",
    today: "Aujourd'hui",
    agenda: "Agenda",
    noEventsInRange: "Aucun événement sur cette période.",
    showMore: (total) => `+ ${total} autres`,
  };

  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: event.color || "#3174ad",
      color: "black",
      borderRadius: "5px",
      padding: "4px",
      border: "none",
    },
  });

  const formatHours = (start, end) =>
    `${moment(start).format("HH:mm")} - ${moment(end).format("HH:mm")}`;

  const CustomEvent = ({ event }) => {
    const tooltipContent = `
      <div style="font-weight:bold; margin-bottom:4px;">${event.title}</div>
      <div style="font-size:0.85em; color:gray; margin-bottom:4px;">${formatHours(
        event.start,
        event.end
      )}</div>
      <div>${event.description}</div>
    `;

    return (
      <span
        data-tooltip-id="event-tooltip"
        data-tooltip-html={tooltipContent}
        style={{ cursor: "pointer" }}
      >
        {event.title}
      </span>
    );
  };

  return (
    <div style={{ padding: "5px" }}>
      <Calendar
        localizer={localizer}
        culture="fr"
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        view={view}
        messages={messagesFr}
        onView={setView}
        date={date}
        onNavigate={setDate}
        views={["month", "week", "day", "agenda"]}
        defaultView="month"
        style={{ height: 760 }}
        eventPropGetter={eventStyleGetter}
        components={{ event: CustomEvent }}
      />
      <Tooltip id="event-tooltip" place="top" effect="solid" html={true} />
    </div>
  );
};

export default Agendainteractif;
