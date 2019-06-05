import React from "react";
import ReactDOM from "react-dom";
import { AppointmentsDayView } from "./AppointmentsDayView.jsx";
import { sampleAppointments } from "./sample-data";

ReactDOM.render(
  <AppointmentsDayView appointments={sampleAppointments} />,
  document.getElementById("root")
);
