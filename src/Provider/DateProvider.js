import React, { useState, useEffect } from "react";
import DateContext from "./DateContext";

const DateProvider = ({ children }) => {
  let [day, setDay] = useState("");
  let [strDay, setStrDay] = useState("");
  //let [month, setMonth] = useState("");
  let [strMonth, setStrMonth] = useState("");
  //let [currYear, setCurrYear] = useState(2020);

  useEffect(() => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednsday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let currYear = 2020;
    //** My timezone is utc+1, so I added an hour here;
    const hour = 1000 * 60 * 60;
    const start = Date.now() + hour;

    const day = Math.floor(start / 1000 / 60 / 60 / 24) % 31;
    const month = Math.floor(start / 1000 / 60 / 60 / 24 / 31) % 12;

    const date = new Date(`${month} ${day}, ${currYear}`);
    const strDay = date.getDay();
    const strMonth = date.getMonth();

    setStrDay(days[strDay]);
    setStrMonth(months[strMonth]);
    setDay(day);
  }, []);

  return (
    <DateContext.Provider value={{ day, strDay, strMonth }}>
      {children}
    </DateContext.Provider>
  );
};

export default DateProvider;
