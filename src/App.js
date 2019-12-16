import React from "react";
import ReactDOM from "react-dom";
import { Calendar, CalendarControls } from "react-yearly-calendar";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const customCSSclasses = {
    holidays: [
      "2018-04-25",
      "2018-05-01",
      "2018-06-02",
      "2018-08-15",
      "2018-11-01"
    ],
    spring: {
      start: "2018-03-21",
      end: "2018-6-20"
    },
    summer: {
      start: "2018-06-21",
      end: "2018-09-22"
    },
    autumn: {
      start: "2018-09-23",
      end: "2018-12-21"
    },
    weekend: "Sat,Sun"
  };
  return (
    <div className="App">
      <CalendarControls year={2018} />
      <Calendar
        year={2018}
        customClasses={customCSSclasses}
        firstDayOfWeek={1}
      />
    </div>
  );
}

export default App;
